import React, { useEffect, useState } from 'react';
import request from './request';
import System from './System';

function App() {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const plugins = await request('/plugins');
        setPlugins(plugins);
      } catch (err) {
        setPlugins([]);
      }
    }
    fetchConfig();
  }, []);

  const install = async() => {
    const plugin = await request('/plugins', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: 'http://localhost:3003/remoteEntry.js',
        scope: 'app3',
        module: './Widget',
      }),
    });
    setPlugins([...plugins, plugin]);
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic Plugin System</h1>

      <button onClick={install}>Install plugin</button>
      
      {plugins.map((plugin) => (<System key={plugin.scope} system={plugin} />))}
    </div>
  );
}

export default App;

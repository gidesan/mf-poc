import React, { useEffect, useState } from 'react';
import DynamicComponent from './DynamicComponent';

const pluginsImport = import('api/plugins');

function App() {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const { fetchPlugins } = await pluginsImport;
        const plugins = await fetchPlugins();
        setPlugins(plugins);
      } catch (err) {
        console.error(err)
        setPlugins([]);
      }
    }
    fetchConfig();
  }, []);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic Plugin System</h1>

      {plugins.map((plugin) => (<DynamicComponent key={plugin.scope} config={plugin} />))}
    </div>
  );
}

export default App;

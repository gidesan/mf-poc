import React, { useEffect, useState } from 'react';
import request from './request';
import System from './System';

function App() {
  const [system, setSystem] = useState(undefined);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const config = await request('/config');
        console.log({ config });
      } catch (err) {
        console.log(err);
      }
    }
    fetchConfig();
  }, []);

  function setApp2() {
    setSystem({
      url: 'http://localhost:3002/remoteEntry.js',
      scope: 'app2',
      module: './Widget',
    });
  }

  function setApp3() {
    setSystem({
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'app3',
      module: './Widget',
    });
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>Shell</h2>
      <p>
        The Dynamic System will take advantage Module Federation{' '}
        <strong>remotes</strong> and <strong>exposes</strong>. It will no load
        components that have been loaded already.
      </p>
      <button onClick={setApp2}>Load App 2 Widget</button>
      <button onClick={setApp3}>Load App 3 Widget</button>
      <div style={{ marginTop: '2em' }}>
        <System system={system} />
      </div>
    </div>
  );
}

export default App;

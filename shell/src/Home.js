import React, { useEffect, useState } from 'react';
import DynamicComponent from './DynamicComponent';

const pluginsImport = import('api/plugins');

export default function Home() {
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

  const install = async() => {
    const { installPlugin } = await pluginsImport;
    const plugin = await installPlugin();
    setPlugins([...plugins, plugin]);
  }

  return (
    <div>
      <h1>AppBuilder new-gen PoC</h1>

      <button onClick={install}>Install plugin</button>

      {plugins.map((plugin) => (<DynamicComponent key={plugin.scope} config={plugin} />))}
    </div>
  );
}

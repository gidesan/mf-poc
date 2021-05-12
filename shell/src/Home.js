import React, { useEffect, useState } from 'react';
import DynamicComponent from './DynamicComponent';

const federatedImport = import('api/modules');

export default function Home() {
  const [modules, setModules] = useState([]);
  
  useEffect(() => {
    async function fetchConfig() {
      try {
        const { fetchInstalledModules } = await federatedImport;
        const modules = await fetchInstalledModules();
        setModules(modules);
      } catch (err) {
        console.error(err)
        setModules([]);
      }
    }
    fetchConfig();
  }, []);
  
  return (
    <div>
      <h1>AppBuilder new-gen PoC</h1>

      {modules.map((plugin) => (<DynamicComponent key={plugin.scope} config={plugin} />))}
    </div>
  );
}

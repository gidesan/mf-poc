import React, { useEffect, useState } from 'react';
import DynamicComponent from './DynamicComponent';

const federatedImport = import('api/modules');

export default function Home() {
  const [modules, setModules] = useState([]);
  
  useEffect(() => {
    async function performFetch() {
      try {
        const { fetchInstalledModules } = await federatedImport;
        const modules = await fetchInstalledModules();
        setModules(modules);
      } catch (err) {
        console.error(err)
        setModules([]);
      }
    }
    performFetch();
  }, []);
  
  return (
    <div>
      <h1>AppBuilder new-gen PoC</h1>

      {modules.map((module) => (<DynamicComponent key={module.scope} config={module} />))}
    </div>
  );
}

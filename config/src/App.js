import React, { useEffect, useState } from 'react';

const federatedImport = import('api/modules');

export default function App() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const { fetchModules } = await federatedImport;
        const modules = await fetchModules();
        setModules(modules);
      } catch (err) {
        console.error(err)
        setModules([]);
      }
    }
    fetchConfig();
  }, []);  

  const handleChange = async(event) => {
    const { fetchModules, installModule, uninstallModule } = await federatedImport;
    await event.target.checked ? uninstallModule(event.target.name) : installModule(event.target.name);
    const modules = await fetchModules();
    setModules(modules);
  };

  return (
    <ul>
      Installed Modules
      {modules.map(module => (
        <li key={module.id}>
          {module.id}
          <input
            name={module.id}            
            type="checkbox"
            checked={module.installed}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );  
}

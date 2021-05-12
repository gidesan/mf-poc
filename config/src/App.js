import React, { useEffect, useState } from 'react';

const modulesImport = import('api/modules');

export default function App() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const { fetchModules } = await modulesImport;
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
    console.log(event.target.checked);
    
    const { fetchModules, installModule, uninstallModule } = await modulesImport;
    await event.target.checked ? uninstallModule(event.target.name) : installModule(event.target.name);
    const modules = await fetchModules();
    setModules(modules);
  };

  return (
    <ul>
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

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

  const handleChange = (event) => {
    // setActivePlugins({...activePlugins, [event.target.name]: event.target.checked});    
  };

  return (
    <form>
      {JSON.stringify(modules)}      
      {/* app2 <input name="app2" type="checkbox" value={activePlugins.app2} onChange={handleChange} />        
      app3 <input name="app3" type="checkbox" value={activePlugins.app3} onChange={handleChange} />         */}
    </form>
  );  
}

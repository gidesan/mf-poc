import React, { useEffect, useState, useRef } from 'react';
import { InstalledModulesContext } from './InstalledModulesContext';

const remoteApiModules = import('api/modules');

export default function InstalledModulesProvider({ children }) {
  const [modules, setModules] = useState([]);
  const installModule = useRef();
  const uninstallModule = useRef();

  useEffect(() => {
    async function init() {
      try {
        const apiModules = await remoteApiModules;
        const { fetchModules } = apiModules;
        
        installModule.current = async(id) => {
          await apiModules.installModule(id);
          const modules = await fetchModules();
          setModules(modules);
        };

        uninstallModule.current = async(id) => {
          await apiModules.uninstallModule(id);
          const modules = await fetchModules();
          setModules(modules);
        };

        const modules = await fetchModules();
        setModules(modules);
      } catch (err) {
        console.error(err)
        setModules([]);
      }
    }
    init();
  }, []);

  return (
    <InstalledModulesContext.Provider value={{
      modules,
      installedModules: modules.filter(module => module.installed),
      installModule: installModule.current,
      uninstallModule: uninstallModule.current,
    }}>
      {children}
    </InstalledModulesContext.Provider>
  );  
}

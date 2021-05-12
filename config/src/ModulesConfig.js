import React, { useContext } from 'react';
import { InstalledModulesContext } from './InstalledModulesContext';

const federatedImport = import('api/modules');

export default function ModulesConfig() {

  const { modules, installModule, uninstallModule } = useContext(InstalledModulesContext);
  
  const handleChange = async(event) => {
    await event.target.checked ? installModule(event.target.name) : uninstallModule(event.target.name);
  };

  return (
    <ul>
      {JSON.stringify(modules)}
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

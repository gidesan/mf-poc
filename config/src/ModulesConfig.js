import React, { useContext } from 'react';
import { InstalledModulesContext } from './InstalledModulesContext';

export default function ModulesConfig() {

  const { modules, installModule, uninstallModule } = useContext(InstalledModulesContext);
  
  const handleChange = (event) => {
    event.target.checked ? installModule(event.target.name) : uninstallModule(event.target.name);
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

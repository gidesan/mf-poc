import React from 'react';
import InstalledModulesProvider from './InstalledModulesProvider';
import ModulesConfig from './ModulesConfig';

export default function App() {
  return (
    <InstalledModulesProvider>
      <ModulesConfig />
    </InstalledModulesProvider>
  );
}

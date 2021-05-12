import React from "react";

const RemoteInstalledModulesProvider = React.lazy(() => import("config/InstalledModulesProvider"));

const InstalledModulesProvider = ({children}) => (
  <React.Suspense fallback="Loading...">
    <RemoteInstalledModulesProvider>
      {children}
    </RemoteInstalledModulesProvider>
  </React.Suspense>
);

export default InstalledModulesProvider;

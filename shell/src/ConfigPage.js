import React from "react";

const RemoteModulesConfig = React.lazy(() => import("config/ModulesConfig"));

const ConfigPage = () => (
  <React.Suspense fallback="Loading...">
    <RemoteModulesConfig />
  </React.Suspense>
);

export default ConfigPage;

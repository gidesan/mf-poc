import React from "react";

const Config = React.lazy(() => import("config/App"));

const ConfigPage = () => (
  <React.Suspense fallback="Loading Page...">
    <Config />
  </React.Suspense>
);

export default ConfigPage;

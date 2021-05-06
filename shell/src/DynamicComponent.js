import React from 'react';
import useDynamicScript from './useDynamicScript';

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

export default function DynamicComponent(props) {
  const { ready, failed } = useDynamicScript({
    url: props.config && props.config.url,
  });

  if (!props.config) {
    return <h2>No config specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.config.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.config.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.config.scope, props.config.module)
  );

  return (
    <React.Suspense fallback="Loading Dynamic Component">
      <Component />
    </React.Suspense>
  );
}

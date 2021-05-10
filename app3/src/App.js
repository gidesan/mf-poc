import LocalButton from "./Widget";
import React, { useEffect } from "react";

const pluginsImport = import('api/plugins');

function App() {
  useEffect(() => {
    async function doEffect() {
      try {
        const { addPlugin } = await pluginsImport;    
        addPlugin({
          url: 'http://localhost:3003/remoteEntry.js',
          scope: 'app3',
          module: './Widget',
        });
      } catch (err) {
        console.error(err)
      }
    }
    doEffect();
  }, []);  

  return (
    <div>
      <h1>Dynamic System Host</h1>
      <h2>App 3</h2>
      <LocalButton />
    </div>
  );
};

export default App;

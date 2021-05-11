import React, { useState } from 'react';

export default function App() {
  const [plugins, setPlugins] = useState({});

  const handleChange = (event) => setPlugins({...plugins, [event.target.name]: event.target.checked});

  return (
    <form>
      app2 <input name="app2" type="checkbox" value={plugins.app2} onChange={handleChange} />        
      app3 <input name="app3" type="checkbox" value={plugins.app3} onChange={handleChange} />        
    </form>
  );  
}

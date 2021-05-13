import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from './Box';

import ConfigPage from './ConfigPage';
import InstalledModulesProvider from './InstalledModulesProvider';
import ModulePage from './ModulePage';
import ModulesMenu from './ModulesMenu';

export default function App() {
  return (
    <Router>
      <InstalledModulesProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/config">Config</Link>
              </li>
              <ModulesMenu />
            </ul>
          </nav>

          <Switch>
            <Route path="/config">
              <ConfigPage />
            </Route>
            <Route path="/:id">
              <ModulePage />
            </Route>
            <Route path="/">
              <div>
                <h1>App architecture PoC based on Module Federation</h1>
                <Box name="team ❤️" />
              </div>
            </Route>
          </Switch>
        </div>
      </InstalledModulesProvider>
    </Router>
  );
}

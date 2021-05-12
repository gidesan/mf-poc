import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ConfigPage from "./ConfigPage";
import Home from "./Home";
import InstalledModulesProvider from "./InstalledModulesProvider";
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
            <Route path="/modules/:id">
              modulesId
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </InstalledModulesProvider>
    </Router>
  );
}




import React, { useContext } from "react";
import {
  Link
} from "react-router-dom";
import { InstalledModulesContext } from "./InstalledModulesContext";

export default function ModulesMenu() {
  const { installedModules } = useContext(InstalledModulesContext);
  return installedModules.map((module) => (
    <li key={module.id}>
      <Link
        to={`/${module.id}`}
      >
        {module.id}
      </Link>
    </li>
  ))
}

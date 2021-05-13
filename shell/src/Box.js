import React from "react";
import DefaultBox from "./DefaultBox";
import Extend from "./Extend";

const ExtendedBox = React.lazy(() => import("extensions/ExtendedBox"));

export default function Box( { name }) {
  return (
    <Extend
      defaultComponent={DefaultBox}
      extendedComponent={ExtendedBox}
      name={name}
    />
  );
}

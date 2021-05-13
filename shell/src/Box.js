import React from "react";
import DefaultBox from "./DefaultBox";

const ExtendedBox = React.lazy(() => import("extensions/ExtendedBox"));
/*
this is implemented as class component in order to use the error boundaries react feature. 
 You can achieve the same result without class components using https://www.npmjs.com/package/react-error-boundary
*/
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback header</div>}>
          <DefaultBox {...this.props} />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>loading</div>}>
        <ExtendedBox {...this.props} />
      </React.Suspense>
    );
  }
}

const App = () => (
  <div>
    <HeaderWrapper />
    <div>Hi there, I'm React from React.</div>
  </div>
);

export default Box;

import React from 'react';

class Extend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    const {
      defaultComponent: DefaultComponent,
      extendedComponent: ExtendedComponent,
      ...rest
    } = this.props;
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading default component...</div>}>
          <DefaultComponent {...rest} />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Loading extended component...</div>}>
        <ExtendedComponent {...rest} />
      </React.Suspense>
    );
  }
}

export default Extend;

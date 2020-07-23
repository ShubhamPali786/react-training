import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import LoadingSpinner from "../components/LoadingSpinner";

const withLoader = (WrappedComponent) => {
  class WithLoadingScreen extends React.Component {
    render() {
      return (
        <React.Fragment>
          <LoadingSpinner />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }
  hoistNonReactStatics(WithLoadingScreen, WrappedComponent);
  return WithLoadingScreen;
};
export default withLoader;

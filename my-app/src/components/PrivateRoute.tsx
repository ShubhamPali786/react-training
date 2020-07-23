import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { StoreModel } from "../store/reducers";

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  const LoadComponent: React.ComponentClass = component as React.ComponentClass;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <LoadComponent />
        ) : (
          <Redirect to={`/login?returnUrl=${location.pathname}`} />
        )
      }
    />
  );
};
const mapStateToProps = (state: StoreModel) => {
  return {
    isAuthenticated: !!state.userSession.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);

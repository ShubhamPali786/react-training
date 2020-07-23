import React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "./Demo";
// import ProductList from "./containers/ProductList";
import ErrorPage from "./components/ErrorPage";
import Checkout from "./containers/Checkout";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./containers/Cart";
import Login from "./containers/Login";

const LazyProductList = React.lazy(() => import("./containers/ProductList"));

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = (props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Demo} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/demo" component={Demo} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={LazyProductList} />
        <PrivateRoute path="/checkout/:transId" component={Checkout} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Suspense>
  );
};
export default AppRouter;

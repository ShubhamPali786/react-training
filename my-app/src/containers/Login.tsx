import React, { SyntheticEvent } from "react";
import Column from "../components/Column";
import { connect } from "react-redux";
import { StoreModel } from "../store/reducers";
import { Dispatch, compose } from "redux";
import { userActions } from "../store/actions/user.actions";
import { Redirect, RouteChildrenProps } from "react-router-dom";
import qs from "querystring";
import withLoader from "../HOC/LoaderHOC";

interface LoginProps extends RouteChildrenProps {
  login: (email: string, password: string) => void;
  isLoggedIn: boolean;
}
interface LoginState {
  email: string;
  password: string;
}
class Login extends React.Component<LoginProps, LoginState> {
  state = { email: "", password: "" };

  doLogin(e: SyntheticEvent) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    if (this.props.isLoggedIn) {
      const param = this.props.location.search
        ? this.props.location.search
        : "";
      let lastPage: any = qs.parse(param);
      lastPage = lastPage["?returnUrl"] ? lastPage["?returnUrl"] : "/";
      return <Redirect to={lastPage} />;
    }
    return (
      <div className="row">
        <Column colSize={3}>
          <form
            className="bg-light border rounded p-4"
            onSubmit={(e) => this.doLogin(e)}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) =>
                  this.setState({ email: e.currentTarget.value })
                }
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) =>
                  this.setState({ password: e.currentTarget.value })
                }
                value={this.state.password}
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">
              Login
            </button>
          </form>
        </Column>
      </div>
    );
  }
}
const mapStateToProps = (state: StoreModel) => {
  return {
    isLoggedIn: !!state.userSession.user,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (email: string, password: string) =>
      dispatch(userActions.login(email, password)),
  };
};
export default compose(
  withLoader,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);

// export default withLoader(Login);

// Login

// HOC 1 (login) : features of HOC 1
// compose (HOC1,HOC2)(Logic) : HOC 1+ HOC 2

// Login (updated) : isLoggedIn, isLoading

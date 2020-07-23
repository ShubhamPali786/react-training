import React from "react";
import Axios from "axios";
import Menu from "../components/Menu";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";

class Header extends React.Component {
  static contextType = ThemeContext;

  state = { menuList: [] };

  componentDidMount() {
    this.getMenuData();
  }

  getMenuData() {
    Axios.get("/menu.json")
      .then((res) => {
        this.setState({ menuList: res.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const theme = this.context
      ? "navbar-dark bg-dark shadow-sm"
      : "navbar-light bg-light shadow-sm";
    return (
      <nav className={"navbar navbar-expand-lg " + theme}>
        <Link to="/" className="navbar-brand">
          <i
            className="fab fa-pied-piper-alt fa-2x"
            style={{ transform: "rotateY(180deg)" }}
          ></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu menuList={this.state.menuList} />
          <div className="d-flex align-items-center">{this.props.children}</div>
        </div>
      </nav>
    );
  }
}
export default Header;

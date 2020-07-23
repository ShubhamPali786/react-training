import React from "react";
import { NavLink } from "react-router-dom";
import { MenuModel } from "../models/menu.model";

interface MenuProps {
  menuList: MenuModel[];
}
const Menu: React.FC<MenuProps> = (props) => {
  return (
    <ul className="navbar-nav mr-auto">
      {props.menuList.map((value) => (
        <li className="nav-item" key={value.menuLabel}>
          <NavLink
            className="nav-link"
            to={value.menuLink}
            exact
            activeClassName="active"
          >
            {value.menuLabel}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;

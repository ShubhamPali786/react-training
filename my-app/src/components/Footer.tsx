import React from "react";
import { ThemeContext } from "../context";

function Footer() {
  const theme = React.useContext(ThemeContext);
  const cls = !theme
    ? "footer mt-auto py-3 border-top shadow-sm"
    : "footer mt-auto py-3 bg-dark text-white shadow-sm";
  return (
    <footer className={cls}>
      <div className="container d-flex align-items-center">
        <i className="fab fa-grav fa-2x mr-4"></i>
        <span>&copy; {new Date().getFullYear()}- My APP </span>
      </div>
    </footer>
  );
}
export default Footer;

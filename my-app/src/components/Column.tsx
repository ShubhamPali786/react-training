import React from "react";
import { ThemeContext } from "../context";

interface ColumnProps {
  colSize?: number;
}

const Column: React.FC<ColumnProps> = (props) => {
  const size = props.colSize ? 12 / props.colSize : 12;
  const cls = `col-md-${size}`;
  const theme = React.useContext(ThemeContext);
  let color = theme ? "text-white" : "";
  color += ` ${cls}`;
  return <div className={color}>{props.children}</div>;
};

Column.defaultProps = {
  colSize: 1,
};
export default Column;

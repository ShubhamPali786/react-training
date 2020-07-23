import React from "react";
interface ContainerProps {
  fullWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({ fullWidth, children }) => {
  const cls = fullWidth ? "container-fluid mb-5" : "container mb-5";
  return <div className={cls}>{children}</div>;
};

export default Container;

import React from "react";

interface ThemeSwitchProps {
  changeTheme: (theme: boolean) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  let [theme, updateTheme] = React.useState(false);

  // lifecycle
  React.useEffect(() => {
    console.log("hook called");
    const color = theme ? "bg-dark" : "";
    document.body.className = color;
  });

  return (
    <div
      className="mx-2"
      style={{ cursor: "pointer" }}
      onClick={() => {
        const t = !theme;
        updateTheme(t); // set state
        // send data to app
        props.changeTheme(t);
      }}
    >
      {!theme ? (
        <i className="fas fa-moon fa-2x text-secondary"></i>
      ) : (
        <i className="fas fa-sun fa-2x text-warning"></i>
      )}
    </div>
  );
};
export default ThemeSwitch;

// mounting, updating, unmounting

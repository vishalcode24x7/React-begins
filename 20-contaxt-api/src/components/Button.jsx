import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);

    const changeTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    }
 

  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default Button;

import React from "react";

import moonLogo from "../../assets/images/icon-moon.svg";
import sunLogo from "../../assets/images/icon-sun.svg";

import "./TodoHeader.scss";

const TodoHeader = ({ lightTheme, setLightTheme }) => {

  const themeHandler = () => {
    setLightTheme(prevState => !prevState)
  };

  return (
    <div className="todo__header">
      <h1 className="todo__header-content">todo</h1>
      <img  src={lightTheme ? moonLogo : sunLogo} alt="logo" onClick={themeHandler}></img>
    </div>
  );
};

export default TodoHeader;

import React from "react";

import "./Form.scss";

const Form = ({
  createTodoHandler,
  setUserInput,
  userInput,
  lightTheme,
}) => {
  return (
    <form
      className={lightTheme ? "todo-create light" : "todo-create"}
      onSubmit={(e) => createTodoHandler(userInput, e)}
    >
      <span className={lightTheme ? "light" : ""}></span>
      <input
        type="text"
        className={lightTheme ? "todo-create__input light" : "todo-create__input"}
        placeholder="Create a new todo..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
    </form>
  );
};

export default Form;

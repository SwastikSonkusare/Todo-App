import React from "react";

import './Form.scss';

const Form = ({ createTodoHandler, setUserInput, userInput }) => {
  return (
    <form
      className="todo-create"
      onSubmit={(e) => createTodoHandler(userInput, e)}
    >
      <span></span>
      <input
        type="text"
        className="todo-create__input"
        placeholder="Create a new todo..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
    </form>
  );
};

export default Form;

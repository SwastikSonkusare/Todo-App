import React from "react";

import "./TodoStatus.scss";

const TodoStatus = ({
  todoItems,
  statusHandler,
  clearCompletedTodosHandler,
  categories,
  status,
  lightTheme
}) => {
  return (
    <>
      <div className= {lightTheme ? "todo__status light" : "todo__status"}>
        <div>{todoItems.length} items left</div>
        <div className="todo__status-content">
          {categories.map((category) => (
            <span
              onClick={() => statusHandler(category)}
              className={`${category === status ? "clicked" : ""} ${lightTheme ? "light" : ""}`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className={lightTheme ? "light" : ""} onClick={clearCompletedTodosHandler}>Clear Completed</div>
      </div>
      <div className={lightTheme ? "todo__status--mobile light" : "todo__status--mobile"}>
        {categories.map((category) => (
          <span
            onClick={() => statusHandler(category)}
            className={`${category === status ? "clicked" : ""} ${lightTheme ? "light" : ""}`}
          >
            {category}
          </span>
        ))}
      </div>
    </>
  );
};

export default TodoStatus;

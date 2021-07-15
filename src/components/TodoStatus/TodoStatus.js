import React from "react";

import "./TodoStatus.scss";

const TodoStatus = ({
  todoItems,
  statusHandler,
  clearCompletedTodosHandler,
  categories,
  status,
}) => {
  return (
    <>
      <div className="todo__status">
        <div>{todoItems.length} items left</div>
        <div className="todo__status-content">
          {categories.map((category) => (
            <span
              onClick={() => statusHandler(category)}
              className={category === status ? "clicked" : ""}
            >
              {category}
            </span>
          ))}
        </div>

        <div onClick={clearCompletedTodosHandler}>Clear Completed</div>
      </div>
      <div className="todo__status--mobile">
        {categories.map((category) => (
          <span
            onClick={() => statusHandler(category)}
            className={category === status ? "clicked" : ""}
          >
            {category}
          </span>
        ))}
      </div>
    </>
  );
};

export default TodoStatus;

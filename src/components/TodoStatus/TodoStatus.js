import React from "react";

import './TodoStatus.scss';

const TodoStatus = ({ todoItems, statusHandler, clearCompletedTodosHandler, categories }) => {
  return (
    <div className="todo__status">
      <div>{todoItems.length} items left</div>
      <div className="todo__status-content">
        {categories.map((category) => (
          <span onClick={() => statusHandler(category)}>{category}</span>
        ))}
      </div>

      <div onClick={clearCompletedTodosHandler}>
        Clear Completed
      </div>
    </div>
  );
};

export default TodoStatus;

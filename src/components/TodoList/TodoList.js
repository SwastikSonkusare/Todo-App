import React from "react";
import TodoItem from "../TodoItem/TodoItem";



const TodoList = ({ filteredTodos, taskCompletedHandler, deleteSingleTodoHandler }) => {
  return (
    <div className="todo__list">
      {filteredTodos.length ? (
        filteredTodos.map((item) => (
          <>
            <TodoItem item={item} taskCompletedHandler={taskCompletedHandler} deleteSingleTodoHandler={deleteSingleTodoHandler} />
          </>
        ))
      ) : (
        <h2>Click above and write your todo task.</h2>
      )}
    </div>
  );
};

export default TodoList;

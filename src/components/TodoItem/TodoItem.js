import React from "react";

import checkIcon from "../../assets/images/icon-check.svg";
import crossIcon from "../../assets/images/icon-cross.svg";

import "./TodoItem.scss";

const TodoItem = ({
  item,
  taskCompletedHandler,
  deleteSingleTodoHandler,
  provided,
  lightTheme
}) => {
  return (
    <li
      className={`${item.complete ? "todo__item complete" : "todo__item"} ${lightTheme ? "todo__item light" : ""}`}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <div onClick={() => taskCompletedHandler(item.id)} className={lightTheme ? "light" : ""}>
        {item.complete && (
          <img className="check-icon" src={checkIcon} alt={checkIcon}></img>
        )}
      </div>
      <small className={lightTheme ? "light" : ""}>{item.task}</small>

      <img
        className="cross-icon"
        src={crossIcon}
        alt={crossIcon}
        onClick={() => deleteSingleTodoHandler(item.id)}
      ></img>
    </li>
  );
};

export default TodoItem;

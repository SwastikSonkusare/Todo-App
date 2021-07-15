import React from "react";

import checkIcon from "../../assets/images/icon-check.svg";
import crossIcon from "../../assets/images/icon-cross.svg";

import './TodoItem.scss';

const TodoItem = ({ item, taskCompletedHandler, deleteSingleTodoHandler }) => {
  return (
    <div className={item.complete ? "todo__item complete" : "todo__item"}>
      <span onClick={() => taskCompletedHandler(item.id)}>
        {item.complete && (
          <img className="check-icon" src={checkIcon} alt={checkIcon}></img>
        )}
      </span>
      <small>{item.task}</small>

      <img
        className="cross-icon"
        src={crossIcon}
        alt={crossIcon}
        onClick={() => deleteSingleTodoHandler(item.id)}
      ></img>
    </div>
  );
};

export default TodoItem;

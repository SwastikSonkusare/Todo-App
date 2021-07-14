import React from "react";

import moonLogo from "../../assets/images/icon-moon.svg";
import sunLogo from "../../assets/images/icon-sun.svg";
import checkIcon from "../../assets/images/icon-check.svg";
import crossIcon from "../../assets/images/icon-cross.svg";

import "./MainSection.scss";

const MainSection = () => {
  const todoItems = ["hello", "goodbye", "hi", "bye"];

  return (
    <main>
      <div className="todo">
        <div className="todo__header">
          <h1 className="todo__header-content">todo</h1>
          <img className="todo__theme" src={moonLogo} alt={moonLogo}></img>
        </div>

        <div className="todo-create">
          <span></span>
          <input
            className="todo-create__input"
            placeholder="Create a new todo..."
          ></input>
        </div>

        <div className="todo__container">
          <ul className="todo__list">
            {todoItems.map((item) => (
              <>
                <li className="todo__item">
                  <span></span>
                  <small>{item}</small>
                </li>
              </>
            ))}
          </ul>

          <div className="todo__status">
            <div className="todo__left">5 items left</div>
            <div className="todo__status-content">
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>

            <div className="todo__completed">Clear Completed</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;

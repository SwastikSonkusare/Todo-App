import React, { useRef, useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import moonLogo from "../../assets/images/icon-moon.svg";
import sunLogo from "../../assets/images/icon-sun.svg";
import checkIcon from "../../assets/images/icon-check.svg";
import crossIcon from "../../assets/images/icon-cross.svg";

import { data } from "../../data";

import "./MainSection.scss";

const MainSection = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState();
  const [userInput, setUserInput] = useState("");

  const categories = ["All", "Active", "Completed"];

  const todoItemRef = useRef();

  const createTodoHandler = (userInput, e) => {
    e.preventDefault();

    if (!userInput) return;

    addTask(userInput);
    setUserInput("");
  };

  const addTask = (userInput) => {
    let copy = [...todoItems];
    copy = [...copy, { id: uuidv4(), task: userInput, complete: false }];

    setTodoItems(copy);
  };

  const taskCompletedHandler = (id) => {
    let mapped = todoItems.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    setTodoItems(mapped);
  };


  const filterHandler = () => {
    switch(status) {
      case "Completed":
        setFilteredTodos(todoItems.filter(todoItem => todoItem.complete === true))
        break;

        case "Active":
          setFilteredTodos(todoItems.filter(todoItem => todoItem.complete === false))
          break;

        default:
          setFilteredTodos(todoItems) 
    }
  }


  const statusHandler = (category) => {
    setStatus(category)
    
  }

  const clearCompletedTodosHandler = () => {
    setTodoItems(todoItems.filter(item => item.complete !== true))
  }

  useEffect(() => {

    filterHandler();
  }, [todoItems, status])

  return (
    <main>
      <div className="todo">
        <div className="todo__header">
          <h1 className="todo__header-content">todo</h1>
          <img className="todo__theme" src={moonLogo} alt={moonLogo}></img>
        </div>

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

        <div className="todo__container">
          <div className="todo__list">
            {filteredTodos.length
              ? filteredTodos.map((item) => (
                  <>
                    <div
                      className={
                        item.complete ? "todo__item complete" : "todo__item"
                      }
                      onClick={() => taskCompletedHandler(item.id)}
                      ref={todoItemRef}
                    >
                      <span></span>
                      <small>{item.task}</small>
                    </div>
                  </>
                ))
              : "No items left"}
          </div>

          <div className="todo__status">
            <div className="todo__left">{todoItems.length} items left</div>
            <div className="todo__status-content">
              {categories.map((category) => (
                <span onClick={() =>statusHandler(category)}>{category}</span>
              ))}
            </div>

            <div className="todo__completed" onClick={clearCompletedTodosHandler}>Clear Completed</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;

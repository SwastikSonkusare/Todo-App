import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import Form from "../Form/Form";
import Header from "../Header/Header";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TodoStatus from "../TodoStatus/TodoStatus";

import "./MainSection.scss";

const MainSection = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState();
  const [userInput, setUserInput] = useState("");
  const [lightTheme, setLightTheme] = useState(false);

  const categories = ["All", "Active", "Completed"];

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
    localStorage.setItem("todoItems", todoItems);
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
    switch (status) {
      case "Completed":
        setFilteredTodos(
          todoItems.filter((todoItem) => todoItem.complete === true)
        );

        localStorage.setItem("todoItems", todoItems);
        break;

      case "Active":
        setFilteredTodos(
          todoItems.filter((todoItem) => todoItem.complete === false)
        );
        localStorage.setItem("todoItems", todoItems);
        break;

      default:
        setFilteredTodos(todoItems);
        localStorage.setItem("todoItems", todoItems);
    }
  };

  const statusHandler = (category) => {
    setStatus(category);
  };

  const clearCompletedTodosHandler = () => {
    setTodoItems(todoItems.filter((item) => item.complete !== true));
  };

  const deleteSingleTodoHandler = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    filterHandler();
  }, [todoItems, status]);

  return (
    <>
    <Header lightTheme={lightTheme} />
    <main className={lightTheme ? "light" : ""}>
      <div className="todo">
        <TodoHeader setLightTheme={setLightTheme} lightTheme={lightTheme} />

        <Form
          userInput={userInput}
          setUserInput={setUserInput}
          createTodoHandler={createTodoHandler}
          lightTheme={lightTheme}
        />

        <div className="todo__container">
          <TodoList
            filteredTodos={filteredTodos}
            taskCompletedHandler={taskCompletedHandler}
            deleteSingleTodoHandler={deleteSingleTodoHandler}
            setFilteredTodos={setFilteredTodos}
            lightTheme={lightTheme}
          />

          <TodoStatus
            todoItems={todoItems}
            statusHandler={statusHandler}
            clearCompletedTodosHandler={clearCompletedTodosHandler}
            categories={categories}
            status={status}
            lightTheme={lightTheme}
          />
        </div>
      
      <p className={lightTheme ? "todo__dnd light" : "todo__dnd"}>Drag and Drop to reorder the list</p>
      </div>

    </main>
    </>
  );
};

export default MainSection;

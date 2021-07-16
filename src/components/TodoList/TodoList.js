import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({
  filteredTodos,
  taskCompletedHandler,
  deleteSingleTodoHandler,
  setFilteredTodos,
  setLightTheme,
  lightTheme
}) => {

  const handleOnDragEnd = (result) => {
    if(!result.destination) return;
    const items = Array.from(filteredTodos)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredTodos(items)
  }



  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todoItems">
        {(provided) => (
          <ul
            className="todo__list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTodos.length ? (
              filteredTodos.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <TodoItem
                      provided={provided}
                      item={item}
                      taskCompletedHandler={taskCompletedHandler}
                      deleteSingleTodoHandler={deleteSingleTodoHandler}
                      setLightTheme={setLightTheme}
                      lightTheme={lightTheme}
                    />
                  )}
                </Draggable>
              ))
            ) : (
              <h2>Click above and write your todo task.</h2>
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;

import React from "react";
import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log(todosData);

  let filterData = todos;
  if (todosData === "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  } else if (todosData == "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }
  return (
    <>
      <ul className="main-task">
        {filterData.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label htmlFor={`rodo-${todo.id}`}> {todo.task}</label>
              {todo.completed && (
                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;

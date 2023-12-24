import { useState } from "react";
import { FormEvent } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddToDo } = useTodos();
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };
  return (
    <>
      

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          name=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default AddToDo;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddToDo from "./components/addToDo";
import "./App.css";
import TodoList from "./components/todoList";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <h1> TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <TodoList />
    </main>
  );
}

export default App;

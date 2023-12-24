import { useContext } from "react";
import { ReactNode, useState, createContext } from "react";

export type ToDosProviderProps = {
  children: ReactNode;
};

export type ToDo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodosContext = {
  todos: ToDo[];
  handleAddToDo: (task: string) => void; //LDKFL;DS
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};
export const todosContext = createContext<TodosContext | null>(null);

export const ToDosProvider = ({ children }: ToDosProviderProps) => {
  const [todos, setTodo] = useState<ToDo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as ToDo[];
    } catch (error) {
      return [];
    }
  });

  const handleAddToDo = (task: string) => {
    if (task === "") return;
    setTodo((prev) => {
      const newToDos: ToDo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };
  const toggleTodoAsCompleted = (id: string) => {
    setTodo((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodo((prev) => {
      let newTodos = prev.filter((todo) => {
        return todo.id !== id;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);

  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
};

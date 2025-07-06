import { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import "./TodoListLayout.css";
import { useEffect } from "react";

export const TodoListLayout = () => {
  const todoListInLocalStorage = () => {
    const data = localStorage.getItem("todoList");
    return data ? JSON.parse(data) : [];
  };

  const [todoList, setTodoList] = useState(todoListInLocalStorage());

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <main className="main">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </main>
  );
};

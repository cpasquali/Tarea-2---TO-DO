import { useEffect, useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ todoList, setTodoList }) => {
  const [textTodo, setTextTodo] = useState("");

  const addTodo = (e, text) => {
    e.preventDefault();

    if (!text) {
      alert("El campo de tarea no puede estar vacio...");
      return;
    }

    const newTodo = {
      id: todoList.length + 1,
      text: text,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);

    alert("Tarea agregada con exito");
    setTextTodo("");
  };

  return (
    <>
      <h2>Lista de Tareas</h2>
      <form onSubmit={(e) => addTodo(e, textTodo)} className="form">
        <input
          type="text"
          placeholder="Ingresa la tarea..."
          onChange={(e) => setTextTodo(e.target.value)}
          value={textTodo}
        />
        <button className="btn" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

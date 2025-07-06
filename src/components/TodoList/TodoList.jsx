import { TodoCard } from "../TodoCard/TodoCard";
import "./TodoList.css";

export const TodoList = ({ todoList, setTodoList }) => {
  if (todoList && todoList.length > 0) {
    return (
      <section className="todo-list-container">
        <h2 style={{ marginBottom: "10px" }}>Tareas registradas</h2>
        {todoList.map((t) => (
          <TodoCard key={t?.id} todo={t} setTodoList={setTodoList} />
        ))}
      </section>
    );
  }

  return (
    <section>
      <h2>No se agregaron tareas aun...</h2>
    </section>
  );
};

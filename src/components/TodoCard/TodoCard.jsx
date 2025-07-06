import "./TodoCard.css";

export const TodoCard = ({ todo, setTodoList }) => {
  const deleteTodo = (idTodo) => {
    setTodoList((prevTodoList) => prevTodoList.filter((t) => t.id !== idTodo));
    alert("Tarea eliminada con exito");
  };

  const toggleStateTodo = (idTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((t) => {
        if (t.id === idTodo) {
          return { ...t, completed: !t.completed };
        } else {
          return { ...t };
        }
      })
    );
  };

  const classTodo = todo.completed ? "completed" : "";

  const iconBtn = todo.completed ? (
    <ion-icon name="close-outline"></ion-icon>
  ) : (
    <ion-icon name="checkmark-outline"></ion-icon>
  );

  return (
    <article className={`todo-card ${classTodo}`}>
      <p>{todo.text}</p>
      <div>
        <button
          className={"btn complete"}
          onClick={() => toggleStateTodo(todo.id)}
        >
          {iconBtn}
        </button>
        <button className="btn delete" onClick={() => deleteTodo(todo.id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </article>
  );
};

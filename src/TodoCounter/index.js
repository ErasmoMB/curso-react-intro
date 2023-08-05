import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <>
      {totalTodos === 0 && <h1 className="TodoCounter">Sin datos</h1>}
      {totalTodos === completedTodos && totalTodos !== 0 && (
        <h1 className="TodoCounter">
          Felicitaciones 🎉🥳 completaste todo <span>{completedTodos}</span>-
          <span>{totalTodos}</span>
        </h1>
      )}
      {totalTodos !== completedTodos && (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </h1>
      )}
    </>
  );
}

export { TodoCounter };

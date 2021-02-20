import React, { useState } from "react";
import "./styles.css";
import AppTodo from "./AppToDo/index";
import TodoContainer from "./TodoContainer/index";

function App() {
  const [todoListValues, setTodoListValues] = useState([]);
  return (
    <div id="main">
      <AppTodo
        todoListValues={todoListValues}
        setTodoListValues={setTodoListValues}
      />
      <TodoContainer
        todoListValues={todoListValues}
        setTodoListValues={setTodoListValues}
      />
    </div>
  );
}

export default App;

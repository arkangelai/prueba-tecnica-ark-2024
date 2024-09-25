import { useState, useRef } from "react";

function App() {
  const input = useRef(null);
  const [todo, setTodo] = useState("Prueba tecnica Ark");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo(input.current.value);
  };

  return (
    <div>
      <h1>ToDo Arkangel AI</h1>
      <form onSubmit={handleAddTodo}>
        <input ref={input} type="text" placeholder="escribe aqui" />
      </form>
      <div>{todo}</div>
    </div>
  );
}

export default App;

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-200 flex flex-col items-center justify-center p-5">
    
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
        Todo List App
      </h1>

      {/* Todo Input Component */}
      <TodoInput todos={todos} setTodos={setTodos} />

      {/* Todo List Component */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

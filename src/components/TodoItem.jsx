export default function TodoItem({ todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleToggle = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="flex justify-between items-center p-3 bg-white shadow rounded">
      <span
        onClick={handleToggle}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

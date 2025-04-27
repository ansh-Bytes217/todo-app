import { useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        className="border p-2 rounded w-64"
        placeholder="Add  a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Add
      </button>
    </div>
  );
}

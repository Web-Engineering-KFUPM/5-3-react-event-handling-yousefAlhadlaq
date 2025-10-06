import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = () => {
    const value = text.trim();
    if (value === "") return;

    const newTask = {
      id: Date.now(), 
      text: value,
    };
    setTasks([...tasks, newTask]);
    setText("");
    
   
  };

  
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  
  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <p className="muted">Current input: <strong>{text}</strong></p>
      {/*Render Task List and Enable Delete */}
      <TaskList tasks={tasks} onDelete={handleDelete} />
      {/*Pass tasks and onDelete */}

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll} disabled={tasks.length === 0}>
          Clear All
        </button>
      </div>
    </section>
  );
}
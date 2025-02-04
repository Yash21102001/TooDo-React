import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#2c3e50",
        color: "white",
        boxShadow: "0 0 50px rgba(247, 243, 243, 0.2)",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>📝
         Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add Your Task                      📝"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            width: "70%",
            padding: "20px",
            borderRadius: "5px",
            border: "none",
            fontSize: "16px",
            outline: "none",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "12px 15px",
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s",
            marginTop:"12px"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#219150")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          ADD
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#34495e",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              style={{
                flexGrow: 1,
                fontSize: "18px",
                textDecoration: t.completed ? "line-through" : "none",
                color: t.completed ? "lightgray" : "white",
                cursor: "pointer",
              }}
              onClick={() => toggleTask(index)}
            >
              {t.text}
            </span>
            <button
              onClick={() => toggleTask(index)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "white",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#1abc9c")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              {t.completed ? "🔄" : "✅"}
            </button>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "white",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "red")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;



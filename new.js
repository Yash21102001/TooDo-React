import { useState } from "react";

const ToDoApp = () => {
  
  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
   
      setTasks([...tasks, { task: task, completed: false }]);
      console.log(task);
      console.log(tasks);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTask = tasks.map(
      (t, i) => (i === index ? { ...t, completed: !t.completed } : t) // not operator (answer reverse)
    );
    setTasks(updatedTask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "250",
              color: "white",
            }}
          >
            <span onClick={() => toggleTask(index)}>{t.task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoApp;
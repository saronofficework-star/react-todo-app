import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import TaskList from "./TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function addTask() {
    if (task === "") return;

    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleTask(index) {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(tasks[index].text);
  }

  function saveEdit(index) {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: editText } : t
    );

    setTasks(newTasks);
    setEditIndex(null);
    setEditText("");
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f2f5"
  }}>
    <div style={{
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      width: "350px",
      textAlign: "center"
    }}>
      <h1>To-Do App 🚀</h1>

      <InputBox task={task} setTask={setTask} addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        startEdit={startEdit}
        saveEdit={saveEdit}
        editIndex={editIndex}
        editText={editText}
        setEditText={setEditText}
      />
    </div>
  </div>
 );
}

export default App;
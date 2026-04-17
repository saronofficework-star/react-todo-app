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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React To-Do App 🚀</h1>

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
  );
}

export default App;
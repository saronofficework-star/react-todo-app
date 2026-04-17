function InputBox({ task, setTask, addTask }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "10px", width: "200px" }}
      />

      <button
        onClick={addTask}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Add
      </button>
    </div>
  );
}

export default InputBox;
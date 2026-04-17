function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  startEdit,
  saveEdit,
  editIndex,
  editText,
  setEditText
}) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((t, index) => (
        <li
          key={index}
          style={{
            background: "#f9f9f9",
            margin: "8px 0",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {editIndex === index ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(index)}>Save</button>
            </>
          ) : (
            <>
              <span style={{
                textDecoration: t.done ? "line-through" : "none"
              }}>
                {t.text}
              </span>

              <div>
                <button onClick={() => toggleTask(index)}>✔</button>
                <button onClick={() => startEdit(index)}>✏️</button>
                <button onClick={() => deleteTask(index)}>❌</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
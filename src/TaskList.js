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
            background: "#f2f2f2",
            margin: "5px",
            padding: "10px",
            borderRadius: "5px"
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
              <span
                style={{
                  textDecoration: t.done ? "line-through" : "none",
                  marginRight: "10px"
                }}
              >
                {t.text}
              </span>

              <button onClick={() => toggleTask(index)}>Done</button>

              <button onClick={() => startEdit(index)}>Edit</button>

              <button onClick={() => deleteTask(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    debugger;
    setTaskError("");
    if (task.length == 0) {
      setTaskError("Please Enter task");
    }
    setTaskList((prev) => [...prev, task]);
  };
  React.useEffect(() => {
    if (task.length == 0) {
      setTaskError("Please Enter task");
      return;
    }
    setTaskError("");
  }, [task]);

  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "10px",
          border: "1px solid lightgray",
        }}
      >
        <h1>My Todo App</h1>
        <div style={{ marginTop: "10px", display: "flex" }}>
          <textarea
            style={{
              border: "1px solid grey",
              width: "92%",
              fontSize: "13px",
              padding: "5px",
              borderRadius: "10px",
            }}
            placeholder="Enter Your Task"
            rows={3}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#043df5",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "13px",
              margin: "0 5px",
              color: "white",
            }}
            onClick={handleAddTask}
          >
            + Add Task
          </button>
        </div>
        <p className="text-red-500 text-[13px]">{taskError}</p>
        <div>
          {taskList.map((task) => {
            return <div>{task}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;

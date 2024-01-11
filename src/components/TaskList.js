import React from "react";
import { TASKS } from "../data";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <div className="text">{task.text}</div>
          <button className="delete" onClick={() => onDeleteTask(task.text)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

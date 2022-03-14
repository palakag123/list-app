import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./AllTasks.css";

const AllTasks = (props) => {
  const sendTaskId = (taskId) => {
    props.sendTaskId(taskId);
  };
  return (
    <div className="alltask-container">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.tasksid}
          taskId={task.tasksid}
          task={task.taskName}
          sendTaskId={sendTaskId}
        />
      ))}
    </div>
  );
};

export default AllTasks;

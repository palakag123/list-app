import React from "react";
import AllTasks from "../../components/AllTasks/AllTasks";
import Button from "../../components/Button/Button";
import "./TaskPage.css";

const TaskPage = (props) => {
  const sendTaskId = (taskId) => {
    props.sendTaskId(taskId);
  };
  return (
    <div className="outer-taskPage">
      <div className="top-button">
        <Button item="TASK" />
      </div>
      <div className="tasks-container">
        <div className="heading-list">
          <h1>{props.name}</h1>
        </div>
        <AllTasks tasks={props.tasks} sendTaskId={sendTaskId} />
      </div>
    </div>
  );
};

export default TaskPage;

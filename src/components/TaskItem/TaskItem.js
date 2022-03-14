import React from "react";
import "./TaskItem.css";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TaskItem = (props) => {
  const navigate = useNavigate();
  const sendTaskId = () => {
    props.sendTaskId(props.taskId);
    navigate("/updateTask");
  };

  return (
    <div className="task-card-container">
      <p className="taskname">{props.task}</p>
      <button className="task-edit-button" onClick={sendTaskId}>
        <BiPencil className="pencil-icon" />
      </button>
    </div>
  );
};

export default TaskItem;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateTaskpage.css";

const UpdateTaskpage = (props) => {
  const navigate = useNavigate();

  const [enteredTask, setEnteredTask] = useState(
    props.tasks[props.taskId - 1].taskName
  );
  const taskUpdateHandler = (event) => {
    setEnteredTask(event.target.value);
    // console.log(props.tasks[props.taskId - 1]);
  };

  const updateSubmitHandler = (event) => {
    // console.log("submitted");
    event.preventDefault();
    const updatedTask = enteredTask;
    props.updateTask(updatedTask);
    navigate("/tasks"); // working
  };

  const backtoHome = () => {
    navigate("/tasks");
  };

  return (
    <div className="outer-UpdateTask">
      <div className="UpdateTask-conatiner">
        <form className="UpdateTask-form" onSubmit={updateSubmitHandler}>
          <label>
            <h1>Update Task</h1>
          </label>
          <input
            type="text"
            onChange={taskUpdateHandler}
            className="updatetaskInput"
            defaultValue={props.tasks[props.taskId - 1].taskName}
          ></input>
          <div className="buttons-container">
            <button type="submit" className="submit-button">
              <b>Submit</b>
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={backtoHome}
            >
              <b>Cancel</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskpage;

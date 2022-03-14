import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTaskpage.css";

const AddTaskpage = (props) => {
  const navigate = useNavigate();

  const [enteredTask, setEnteredTask] = useState("");
  const taskAddHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const taskSubmitHandler = (event) => {
    console.log("submitted");
    event.preventDefault();
    const newTask = {
      taskid: props.tasks.length + 1,
      taskName: enteredTask,
    };
    props.addTask(newTask);
    navigate("/tasks"); // working
  };

  const backtoHome = () => {
    navigate("/tasks");
  };

  return (
    <div className="outer-AddTask">
      <div className="addTask-conatiner">
        <form className="addTask-form" onSubmit={taskSubmitHandler}>
          <label>
            <h1>Add Task</h1>
          </label>
          <input
            type="text"
            onChange={taskAddHandler}
            className="taskInput"
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

export default AddTaskpage;

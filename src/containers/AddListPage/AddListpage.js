import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddListpage.css";

const AddListpage = (props) => {
  const navigate = useNavigate();

  const [enteredList, setEnteredList] = useState("");

  const listAddHandler = (event) => {
    setEnteredList(event.target.value);
  };
  const listSubmitHandler = (event) => {
    console.log("submitted");
    event.preventDefault();
    const newList = {
      id: props.list.length + 1,
      listName: enteredList,
      tasks: [],
    };
    props.addList(newList);
    navigate("/"); // working
  };

  const backtoHome = () => {
    navigate("/");
  };

  return (
    <div className="outer-Addlist">
      <div className="addList-conatiner">
        <form className="addList-form" onSubmit={listSubmitHandler}>
          <label>
            <h1>Add List</h1>
          </label>
          <input
            type="text"
            className="listInput"
            onChange={listAddHandler}
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

export default AddListpage;

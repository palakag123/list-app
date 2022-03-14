import React from "react";
import "./ListItem.css";
import { useNavigate } from "react-router-dom";

const ListItem = (props) => {
  let navigate = useNavigate();
  const gotoTask = () => {
    props.gotoTask(props.listId, props.listName);
    navigate("/tasks");
  };

  return (
    <div className="card-container">
      <button className="card-button" onClick={gotoTask}>
        <p>{props.listName}</p>
      </button>
    </div>
  );
};

export default ListItem;

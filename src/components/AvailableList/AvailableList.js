import React from "react";
import ListItem from "../ListItem/ListItem";
import "./AvailableList.css";

const AvailableList = (props) => {
  const gotoTask = (id, name) => {
    props.gotoTask(id, name);
  };

  return (
    <div className="lists-container">
      {props.lists.map((list) => (
        <ListItem
          key={list.id}
          listName={list.listName}
          listId={list.id}
          gotoTask={gotoTask}
        />
      ))}
    </div>
  );
};

export default AvailableList;

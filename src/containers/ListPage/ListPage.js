// import React, { useState } from "react";
import "./ListPage.css";
import AvailableList from "../../components/AvailableList/AvailableList";
import Button from "../../components/Button/Button";

const ListPage = (props) => {
  const gotoTask = (id, name) => {
    props.gotoTask(id, name /*, list[id - 1].tasks, list*/);
  };

  return (
    <div className="outer-container">
      <header className="header">
        <Button item="LIST" />
      </header>
      <div className="bottom-container">
        <div className="content-container">
          <h1>AVAILABLE LISTS</h1>
          <div className="cards-container">
            <AvailableList lists={props.list} gotoTask={gotoTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;

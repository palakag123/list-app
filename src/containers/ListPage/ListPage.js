import React, { useState } from "react";
import "./ListPage.css";
import AvailableList from "../../components/AvailableList/AvailableList";
import Button from "../../components/Button/Button";

const ListPage = (props) => {
  // const dummyList = [
  //   {
  //     id: 1,
  //     listName: "Health",
  //     tasks: [
  //       {
  //         tasksid: 1,
  //         taskName: "workout",
  //       },
  //       {
  //         tasksid: 2,
  //         taskName: "eat veggies",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     listName: "Brain",
  //     tasks: [
  //       {
  //         tasksid: 1,
  //         taskName: "meditate",
  //       },
  //       {
  //         tasksid: 2,
  //         taskName: "mind exercise",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     listName: "Go Out",
  //     tasks: [
  //       {
  //         tasksid: 1,
  //         taskName: "bowling",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     listName: "Work",
  //     tasks: [
  //       {
  //         tasksid: 1,
  //         taskName: "finish remaining",
  //       },
  //     ],
  //   },
  // ];

  const gotoTask = (id, name) => {
    props.gotoTask(id, name /*, list[id - 1].tasks, list*/);
  };

  // const [list, setlist] = useState(props.list);

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

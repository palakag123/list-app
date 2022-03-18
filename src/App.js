import "./App.css";
import ListPage from "./containers/ListPage/ListPage";
import { useState } from "react";
import TaskPage from "./containers/TaskPage/TaskPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import AddListpage from "./containers/AddListPage/AddListpage";
import AddTaskpage from "./containers/AddTaskpage/AddTaskpage";
import UpdateTaskPage from "./containers/UpdateTaskPage/UpdateTaskPage";
const dummyList = [
  {
    id: 1,
    listName: "Health",
    tasks: [
      {
        tasksid: 1,
        taskName: "workout",
      },
      {
        tasksid: 2,
        taskName: "eat veggies",
      },
    ],
  },
  {
    id: 2,
    listName: "Brain",
    tasks: [
      {
        tasksid: 1,
        taskName: "meditate",
      },
      {
        tasksid: 2,
        taskName: "mind exercise",
      },
    ],
  },
  {
    id: 3,
    listName: "Go Out",
    tasks: [
      {
        tasksid: 1,
        taskName: "bowling",
      },
    ],
  },
  {
    id: 4,
    listName: "Work",
    tasks: [
      {
        tasksid: 1,
        taskName: "finish remaining",
      },
    ],
  },
];

function App() {
  const [listId, setlistId] = useState();
  const [listName, setlistName] = useState("");
  const [tasksList, setTasks] = useState([]);
  const [list, setList] = useState(dummyList);
  const [taskId, setTaskId] = useState();

  // const [newList, setnewList] = useState({});

  const gotoTask = (id, name) => {
    setlistId(id);
    setlistName(name);
    setTasks(list[id - 1].tasks);
    // setList(list);
  };

  const addList = (newList) => {
    setList((oldLists) => [...oldLists, newList]);
  };

  const addTask = (newTask) => {
    // const oldTasks=list[listId-1].tasks
    setTasks((oldTasks) => [...oldTasks, newTask]);
    setList(list);
  };

  const sendTaskId = (taskId) => {
    setTaskId(taskId);
  };

  const updateTask = (updatedTask) => {
    // list[listId - 1].tasks[taskId - 1] = updatedTask;

    const newTaskList = tasksList.map((task) => Object.assign({}, task));
    newTaskList[taskId - 1].taskName = updatedTask;
    setTasks(() => newTaskList);
    const updatedList = list.map((listItem) => Object.assign({}, listItem));
    updatedList[listId - 1].tasks = newTaskList;
    setList(() => updatedList);
  };

  return (
    <Router>
      {/* {isList ? (
        <ListPage gotoTask={gotoTask} />
      ) : (
        <TaskPage id={listId} name={listName} />
      )} */}
      <Routes>
        <Route
          path="/"
          exact
          element={<ListPage gotoTask={gotoTask} list={list} />}
        />
        <Route
          path="/tasks"
          element={
            <TaskPage
              id={listId}
              name={listName}
              tasks={tasksList}
              sendTaskId={sendTaskId}
            />
          }
        />
        <Route
          path="/addList"
          element={<AddListpage list={list} addList={addList} />}
        />
        <Route
          path="/addTask"
          element={<AddTaskpage tasks={tasksList} addTask={addTask} />}
        />
        <Route
          path="/updateTask"
          element={
            <UpdateTaskPage
              taskId={taskId}
              tasks={tasksList}
              updateTask={updateTask}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));

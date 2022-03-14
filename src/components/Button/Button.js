import React from "react";
import "./Button.css";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const gotoAdd = () => {
    if (props.item === "LIST") navigate("/addList");
    if (props.item === "TASK") navigate("/addTask");
  };

  return (
    <div>
      <button className="button" onClick={gotoAdd}>
        <FaPlusCircle className="plusIcon" />
        <h1>CREATE {props.item}</h1>
      </button>
    </div>
  );
};

export default Button;

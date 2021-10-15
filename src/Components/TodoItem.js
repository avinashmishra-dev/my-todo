import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem = ({ item, onClick }) => {
  return (
    <div>
      <li className={`${classes.label}`}>
        {item}
        <span
          className={`${classes.deleteHandler} hand`}
          onClick={onClick}
        ></span>
      </li>
    </div>
  );
};
export default TodoItem;

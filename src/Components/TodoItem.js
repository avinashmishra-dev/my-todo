import React from "react";
import classes from './Todo.module.css'
const TodoItem = ({ item,onClick }) => {
  return (
    <div className={classes.backgroundcolor}>
      <li>{item}</li>
      <button onClick = {onClick}>Delete</button>
    </div>
  );
};
export default TodoItem;

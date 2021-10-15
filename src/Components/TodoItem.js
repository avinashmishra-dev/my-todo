import React from "react";
const TodoItem = ({ item,onClick }) => {
  return (
    <div>
      <li>{item}</li>
      <button onClick = {onClick}>Delete</button>
    </div>
  );
};
export default TodoItem;

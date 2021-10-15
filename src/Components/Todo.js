import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);

  const dataHandler = (event) => {
    setListName(event.target.value);
  };

  const itemHandler = () => {
    setItems((oldItem) => {
      return [...oldItem, listName];
    });
    setListName("");
  };

  return (
    <div>
      <div>
        <label>Enter Todo</label>
        <input type="text" value={listName} onChange={dataHandler}></input>
        <br />
        <button onClick={itemHandler}>Add Todo</button>
        <ul>
          {items.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;

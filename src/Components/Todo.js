import { useState } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo = () => {
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);

  const dataHandler = (event) => {
    setListName(event.target.value);
  };

  const itemHandler = () => {
    setItems([...items, listName]);
    setListName("");
  };

  const deleteHandler = (index) => {
    setItems(
      items.filter((item, id) => {
        return id !== index;
      })
    );
  };

  return (
    <div className={`${classes.todos} d-flex flex-column`}>
      <div className={`d-flex flex-column text-align-center justify-content-center align-items-center`}>
        <label className={classes.todosTitle}>What's up Today?</label>
        <input className={classes.todoInput} type="text" value={listName} onChange={dataHandler} placeholder="Add new todo here..."></input>
        <button className={`btn`} onClick={itemHandler} disabled={true}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => {
          return (
            <TodoItem
              key={index}
              item={item}
              onClick={() => deleteHandler(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;

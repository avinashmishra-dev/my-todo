import { index } from "mathjs";
import { useState } from "react";
import TodoItem from "./TodoItem";

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
    <div>
      <div>
        <label>Enter Todo</label>
        <input type="text" value={listName} onChange={dataHandler}></input>
        <br />
        <button onClick={itemHandler}>Add Todo</button>
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
    </div>
  );
};
export default Todo;

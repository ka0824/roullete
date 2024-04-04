import { useState } from "react";
import AddItem from "./AddItem";

const ItemList = () => {
  const [list, setList] = useState([]);

  const addItem = (newItem) => {
    setList((prev) => [...prev, newItem]);
    console.log(list);
  };

  return (
    <>
      {list.map((item, index) => (
        <div>
          {item.name} x{item.count}
        </div>
      ))}
      <AddItem addItem={addItem} />
    </>
  );
};

export default ItemList;

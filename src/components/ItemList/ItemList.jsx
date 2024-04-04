import { useState } from "react";

import AddItem from "./AddItem";
import colors from "../../constants/colors";

const ItemList = () => {
  const [list, setList] = useState([]);

  const addItem = (newItem) => {
    setList((prev) => [...prev, newItem]);
  };

  return (
    <>
      {list.map((item, index) => (
        <div key={`item-${index}`}>
          <span className={`bg-[${colors[index % colors.length]}]`}>
            {"\u00A0"}
          </span>
          <span>{item.name}</span>
          <span>x {item.count}</span>
        </div>
      ))}
      <AddItem addItem={addItem} />
    </>
  );
};

export default ItemList;

import { useState } from "react";

import AddItem from "./AddItem";
import colors from "../../constants/colors";

const ItemList = () => {
  const [list, setList] = useState([]);

  const addItem = (newItem) => {
    setList((prev) => [...prev, newItem]);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={`item-${index}`} className="flex gap-4 mb-1">
          <span className={`bg-[${colors[index % colors.length]}]`}>
            {"\u00A0"}
          </span>
          <span className="inline-box w-24 text-ellipsis overflow-hidden">
            {item.name}
          </span>
          <span>x {item.count}</span>
        </div>
      ))}
      <AddItem addItem={addItem} />
    </div>
  );
};

export default ItemList;

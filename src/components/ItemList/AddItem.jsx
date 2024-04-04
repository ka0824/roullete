import { useState } from "react";
import colors from "../../constants/colors";

const AddItem = ({ addItem, list }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const subtractCount = () => {
    if (count === 1) return;

    setCount((prev) => prev - 1);
  };

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddItem = () => {
    if (!name.trim()) return;

    addItem({ name, count, color: colors[list.length % colors.length] });
    setName("");
    setCount(1);
  };

  return (
    <div className="flex gap-2">
      <input
        value={name}
        onChange={changeName}
        className="border rounded w-36"
      />
      <div className="flex gap-1">
        <button onClick={subtractCount} className="border w-6 rounded">
          -
        </button>
        <input
          type="number"
          value={count}
          className="border w-8 text-center rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button onClick={addCount} className="border w-6 rounded">
          +
        </button>
      </div>
      <button onClick={handleAddItem} className="border rounded px-2">
        추가
      </button>
    </div>
  );
};

export default AddItem;

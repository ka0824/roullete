import { useState } from "react";

const AddItem = ({ addItem }) => {
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
    addItem({ name, count });
    setName("");
    setCount(1);
  };

  return (
    <div className="flex">
      <input value={name} onChange={changeName} className="border" />
      <div>
        <button onClick={subtractCount} className="border">
          -
        </button>
        <input type="number" value={count} className="border" />
        <button onClick={addCount} className="border">
          +
        </button>
      </div>
      <button className="border" onClick={handleAddItem}>
        추가
      </button>
    </div>
  );
};

export default AddItem;

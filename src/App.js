import { useState } from "react";

import ItemList from "./components/ItemList/ItemList";

function App() {
  const [list, setList] = useState([]);

  const addItem = (newItem) => {
    setList((prev) => [...prev, newItem]);
  };

  return (
    <div className="App">
      <ItemList list={list} addItem={addItem} />
    </div>
  );
}

export default App;

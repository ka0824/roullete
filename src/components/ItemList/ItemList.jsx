import AddItem from "./AddItem";

const ItemList = ({ list, addItem }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={`item-${index}`} className="flex gap-4 mb-1">
          <span className={`bg-[${item.color}]`}>{"\u00A0"}</span>
          <span className="inline-box w-32 text-ellipsis overflow-hidden">
            {item.name}
          </span>
          <span>x {item.count}</span>
        </div>
      ))}
      <AddItem list={list} addItem={addItem} />
    </div>
  );
};

export default ItemList;

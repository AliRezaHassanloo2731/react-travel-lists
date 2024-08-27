import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onHandleDeleteItem,
  onToggleItem,
  onClearLists,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desciption")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDeleteItem={onHandleDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order </option>
          <option value="desciption">So rt by desctiption</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearLists}>clear lists </button>
      </div>
    </div>
  );
}

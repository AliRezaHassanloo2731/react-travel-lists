export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding new items to the packing list</em>
      </footer>
    );

  const packedItems = items.filter((item) => item.packed === true).length;
  const percentagePackedItems = Math.round((packedItems / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePackedItems === 100
          ? "You got everything !ready to go🛫 "
          : `💼 You need ${items.length} items on your list, and you already packed
        ${packedItems} (${percentagePackedItems}%)`}
      </em>
    </footer>
  );
}

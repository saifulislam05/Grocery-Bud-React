// groceryList.js
import React from "react";
import GroceryItem from "./GroceryItem";


const Groceries = ({ groceryItems, onDeleteItem }) => {
  return (
    <div className="min-h-16 p-3 flex flex-col gap-2">
      {groceryItems.length > 0 ? (
        groceryItems.map((item) => (
          <GroceryItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
          />
        ))
      ) : (
        <p className="text-white text-center">
          No items in the grocery. Add some item!
        </p>
      )}
    </div>
  );
};

export default Groceries;

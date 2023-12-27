// groceryList.js
import React from "react";
import GroceryItem from "./GroceryItem";

const Groceries = ({ groceryItems, onDeleteItem, clearCompleted }) => {
  return (
    <div>
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
      {groceryItems.length > 0 ? (
        <div className="w-full flex justify-center items-center">
          <button className="btn btn-error btn-sm" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Groceries;

// App.js
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import GroceryList from "./Components/Grocery/Groceries";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
    setGroceryItems(storedItems);
  }, []);

  const updateGroceryItems = (newItems) => {
    setGroceryItems(newItems);
    localStorage.setItem("groceryItems", JSON.stringify(newItems));
  };

  const handleAddItem = (newItem) => {
    const updatedItems = [
      {name:newItem, id: Date.now(), checked: false },
      ...groceryItems,
    ];
    updateGroceryItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = groceryItems.filter((item) => item.id !== id);
    updateGroceryItems(updatedItems);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[600px] bg-[#182234] rounded-xl overflow-hidden p-4">
        <Header onAddItem={handleAddItem} />
        <GroceryList
          groceryItems={groceryItems}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;

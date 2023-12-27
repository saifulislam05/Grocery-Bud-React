// App.js
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import GroceryList from "./Components/Grocery/Groceries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      { name: newItem, id: Date.now(), checked: false },
      ...groceryItems,
    ];
    updateGroceryItems(updatedItems);
    toast.success("Item Added Successfully !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDeleteItem = (id) => {
    const updatedItems = groceryItems.filter((item) => item.id !== id);
    updateGroceryItems(updatedItems);
    toast.error("Item Deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
        <div className="w-[600px] bg-[#182234] rounded-xl overflow-hidden p-4">
          <Header onAddItem={handleAddItem} />
          <GroceryList
            groceryItems={groceryItems}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

function Header({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (newItem) {
      onAddItem(newItem);
      setNewItem("");
    }
  };
  return (
    <header className="header p-3 rounded-e-md bg-[#1e293b]">
      <h1 className="name text-center uppercase text-white text-2xl font-bold mb-3">
        Grocery Bud
      </h1>
      <div className="flex justify-between items-center">
        <input
          type="text"
          name="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Type your Grocery name"
          className="input input-sm input-bordered input-success w-5/6"
        />
        
        <button
          onClick={handleAddButtonClick}
          className="btn btn-sm btn-success"
        >
          Add Item
        </button>
      </div>
    </header>
  );
}

export default Header;

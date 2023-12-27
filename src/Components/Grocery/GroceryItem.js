import React, { useEffect, useState } from "react";

const GroceryItem = ({ item, onDeleteItem }) => {
  const [isChecked, setIsChecked] = useState(item.checked);
  const { name, id } = item;

  useEffect(() => {
    const updatedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);
    updatedItems[updatedItemIndex].checked = isChecked;
    localStorage.setItem("groceryItems", JSON.stringify(updatedItems));
  }, [isChecked, id]);

  return (
    <div className="flex justify-between items-center py-2 border-b-2 border-[#212b3c]">
      <div className="w-2/3 flex justify-between items-center">
        <div className="flex items-center ">
          <input
            id={`checkbox-${id}`}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            htmlFor={`checkbox-${id}`}
            className={`ms-2 font-medium text-gray-900 dark:text-gray-300${
              isChecked ? " line-through" : ""
            }`}
          >
            {name}
          </label>
        </div>
      </div>
      <div className="w-1/3 flex justify-end gap-2">
        <button
          onClick={() => onDeleteItem(id)}
          className="btn btn-xs btn-error rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;

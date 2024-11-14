import React from "react";

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  return (
    <div className="border p-4 mb-2 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{expense.title}</h2>
        <p>{expense.description}</p>
        <p className="text-sm text-gray-500">{expense.category}</p>
        <p className="text-sm font-bold">${expense.price}</p>
      </div>
      <div>
        <button 
          onClick={() => onEdit(expense)} 
          className="bg-green-900 text-white px-10 py-2 mr-2"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(expense.id)} 
          className="bg-red-400 text-white px-10 py-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;

import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default ExpenseList;

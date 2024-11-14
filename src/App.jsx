import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:5000/expenses");
    setExpenses(response.data);
  };

  const addExpense = async (expense) => {
    const response = await axios.post("http://localhost:5000/expenses", expense);
    setExpenses([...expenses, response.data]);
  };

  const updateExpense = async (updatedExpense) => {
    await axios.put(`http://localhost:5000/expenses/${updatedExpense.id}`, updatedExpense);
    setExpenses(expenses.map(exp => exp.id === updatedExpense.id ? updatedExpense : exp));
  };
 

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/expenses/${id}`);
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Expense Tracker</h1>
      <ExpenseForm 
        onAdd={addExpense} 
        onEdit={updateExpense} 
        editingExpense={editingExpense} 
        clearEditing={() => setEditingExpense(null)} 
      />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={handleEdit} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

const ExpenseForm = ({ onAdd, onEdit, editingExpense, clearEditing }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    if (editingExpense) setFormData(editingExpense);
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingExpense) {
      onEdit({ ...formData, id: editingExpense.id });
      clearEditing();
    } else {
      onAdd({ ...formData, id: Date.now() });
    }
    setFormData({ title: "", description: "", category: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 mt-7">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-green-600 text-white p-2 w-full">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;

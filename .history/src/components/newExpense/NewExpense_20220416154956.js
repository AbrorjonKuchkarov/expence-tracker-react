import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [editButton, setEditButton] = useState(false);

  const showForm = () => {
    setEditButton(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!editButton && <button onClick={showForm}>Add new Expense</button>}
      {editButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
      <button>Cancel</button>
    </div>
  );
};

export default NewExpense;

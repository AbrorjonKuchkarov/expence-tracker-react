import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [editButton, setEditButton] = useState(false);

  const showForm = () => {
    setEditButton(true);
  };

  const hideForm = () => {
    setEditButton(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditButton(false);
  };
  return (
    <div className="new-expense">
      {!editButton && <button onClick={showForm}>Add new Expense</button>}
      {editButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onhideForm={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;

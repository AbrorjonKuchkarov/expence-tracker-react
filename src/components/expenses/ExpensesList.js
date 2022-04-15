import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <div>
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">No expenses exist</h2>
      )}
      {props.items.length > 0 && (
        <li className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </li>
      )}
    </div>
  );
};

export default ExpensesList;

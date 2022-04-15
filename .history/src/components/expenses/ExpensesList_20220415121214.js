import React from "react";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <div>
      {props.items.length === 0 && <p>No expenses exist</p>}
      {props.items.length > 0 && (
        <ul>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;

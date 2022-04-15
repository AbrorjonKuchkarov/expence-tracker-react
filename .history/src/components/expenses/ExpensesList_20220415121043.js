import React from "react";
import "./ExpensesList.css";

const ExpensesList = () => {
  return (
    <div>
      {filteredExpenses.length === 0 && <p>No expenses exist</p>}
      {filteredExpenses.length > 0 && (
        <ul>
          {filteredExpenses.map((expense) => (
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

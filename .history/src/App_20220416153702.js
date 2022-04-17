import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "01",
    title: "Car Insurace",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "02",
    title: "Books",
    amount: 102.67,
    date: new Date(2019, 3, 28),
  },
  {
    id: "03",
    title: "Health Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 2),
  },
  {
    id: "04",
    title: "Shopping",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    // bu liniyadagi NewExpense comp dan kelgani
    setExpenses((prevExpenses) => {
      // bu esa tepadagi DUMMY_DATA
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expense) => {
    const expensesNew = {
      ...expense,
    };
    console.log(expensesNew);
  };
  const expenses = [
    {
      id: "01",
      title: "Car Insurace",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "02",
      title: "Books",
      amount: 102.67,
      date: new Date(2022, 3, 28),
    },
    {
      id: "03",
      title: "Health Insurance",
      amount: 294.67,
      date: new Date(2022, 4, 2),
    },
    {
      id: "04",
      title: "Shopping",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
  ];
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
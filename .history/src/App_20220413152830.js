import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurace", amount: 294.67, date: new Date(2022, 2, 28) },
    { title: "Books", amount: 102.67, date: new Date(2022, 3, 28) },
    { title: "Health Insurance", amount: 294.67, date: new Date(2022, 4, 02) },
    { title: "Shopping", amount: 294.67, date: new Date(2022, 2, 28) },
  ];
  return (
    <div>
      <ExpenseItem title="expenses.title"></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

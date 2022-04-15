import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeFilterHandler = (event) => {
    props.onSaveFilter(event.target.value);
  };
  return (
    <div>
      <div className="expense-filter">
        <div className="expense-filter__control">
          <label> Filter by year </label>
          <select onChange={changeFilterHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;

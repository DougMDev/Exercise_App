import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  //2022 is set by Default, this doesnt affect the Front End view of 2022
  const [filteredYear, setFilteredYear] = useState("2022");

  //onSaveFilterData is where i set the prop for Expenses Filter to bring the data up (Part 2)
  const saveFilterDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Returns True if date matches the filtered year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveFilterData={saveFilterDataHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

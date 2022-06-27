import React from 'react';
import './ExpenseFilter.css';

export default function ExpensesFilter(props) {


    const FilterYearHandler = (event) => {
        //This is where it is pushed back up to Expenses.js (Part 1)
        props.onSaveFilterData(event.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select values={props.selected} onChange={FilterYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
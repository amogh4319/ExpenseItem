import React,{useState} from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpenseFilter from '../Expense filter/ExpenseFilter';
const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
return(
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense)=>(
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            ></ExpenseItem>

        ))}

    </Card>
    
    
)
}
export default Expenses;
import React from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
const Expenses=(props)=>{
return(
    <Card className="expenses">
        <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
    place={props.items[0].place}
    ></ExpenseItem>

    <ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
    place={props.items[1].place}
    ></ExpenseItem>

    <ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}
    place={props.items[2].place}
    ></ExpenseItem>

    <ExpenseItem
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
    place={props.items[3].place}
    ></ExpenseItem>
    </Card>
    
    
)
}
export default Expenses;
import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            
           <ExpenseDetails  amount={props.amount} place={props.place} title={props.title}/>
        </Card>
    

     
    );
}
export default ExpenseItem;
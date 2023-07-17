import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{
    function deleteExpense(target){
        const expenseItem=target.parentElement;
        const expense=document.querySelector('.expenses');
        expense.removeChild(expenseItem);
    }
   
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            
           <ExpenseDetails  amount={props.amount} place={props.place} title={props.title}/>
           <button onClick={(e)=>deleteExpense(e.target)}>Delete Expenses</button>
        </Card>
    

     
    );
}
export default ExpenseItem;
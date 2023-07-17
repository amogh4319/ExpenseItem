import React,{useState} from 'react';
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

    const[title,setTitle]=useState(props.title);
    function clickHandler(){
        setTitle('updated!');
        console.log(title);
    }
    const[amount,setAmount]=useState(props.amount);
    function amtHandler(){
        setAmount('100');
        console.log(amount);
    }
   
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            
           <ExpenseDetails  amount={amount} place={props.place} title={title}/>
           <button onClick={amtHandler}>new amt</button>
           <button onClick={(e)=>deleteExpense(e.target)}>Delete Expenses</button>
           <button onClick={clickHandler}>Change title</button>
           
        </Card>
    

     
    );
}
export default ExpenseItem;
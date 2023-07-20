import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './Expenses/ExpenseItem';
const ExpenseList=(props)=>{
    
     
    if(props.items.length===0){
      return <h2 className='expenses-list__fallback'>no expense found</h2>
    }
    else if(props.items.length===1){
        return (<div>
             {props.items.map((expense)=>(
          <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              ></ExpenseItem>
  
          ))}
        <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
        </div>
            )
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense)=>(
          <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              ></ExpenseItem>
  
          ))}
        </ul>
    )
}
export default ExpenseList;
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';
import React,{useState} from "react";
const NewExpenses=(props)=>{
    const [isEditing,setEditing]=useState(false);
    const addExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }
        props.onExpenseRecieved(expenseData)
        setEditing(false);
    }
    const startEditingHandler=()=>{
        setEditing(true);
    }
    const stopEditingHandler=()=>{
        setEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add new Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpense={addExpenseData} onCancel={stopEditingHandler}/>}
    </div>
}
export default NewExpenses;
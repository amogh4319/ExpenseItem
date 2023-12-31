import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
 const [enteredTitle,setEnteredTitle]=useState('');
 const [enteredAmount,setEnteredAmount]=useState('');
 const [enteredDate,setEnteredDate]=useState('');

// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
// })
    const changeTitleHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput(
        //     ...userInput,
        //     enteredTitle=event.target.value,
        // )
        
    }
    
    const changeAmtHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput(
        //     ...userInput,
        //     enteredAmount=event.target.value,
        // )
        
    }
    
    const changeDateHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput(
        //     ...userInput,
        //     enteredDate=event.target.value,
        // )
    }

    const submission=(event)=>{
       event.preventDefault();
        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpense(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    
   
    return(
        
            
        <form onSubmit={submission}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text"
                    value={enteredTitle}
                    onChange={changeTitleHandler}/>
               </div> 
                
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={changeAmtHandler}/>
                </div>
                
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate}
                    onChange={changeDateHandler}/>
                </div>
               
                
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <div className='new-expense__actions'><button type="submit">Add Expenses</button></div>
            
        </form>
        
    )
}
export default ExpenseForm;
import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
const [title,enteredTitle]=useState('');
    const changeTitleHandler=(event)=>{
        enteredTitle(event.target.value);
        console.log(title);
    }
    const [amount,enteredAmount]=useState('');
    const changeAmtHandler=(event)=>{
        enteredAmount(event.target.value);
        console.log(amount);
    }
    const [date,enteredDate]=useState('');
    const changeDateHandler=(event)=>{
        enteredDate(event.target.value);
        console.log(date);
    }
    
   
    return(
        
            
        <form>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={changeTitleHandler}/>
               </div> 
                
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={changeAmtHandler}/>
                </div>
                
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={changeDateHandler}/>
                </div>
               
                
            </div>
            <div className='new-expense__actions'><button type="submit">Add Expenses</button></div>
        </form>
        
    )
}
export default ExpenseForm;
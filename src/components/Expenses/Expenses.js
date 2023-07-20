import React,{useState} from 'react';
import './Expenses.css';


import Card from '../UI/Card';
import ExpenseFilter from '../Expense filter/ExpenseFilter';
import ExpenseList from '../ExpenseList';
const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        // Assuming the date property in the expense object is a Date object
        return expense.date.getFullYear().toString() === filteredYear;
      });
      
      
           
      
return(
    <Card className="expenses">
        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
        />
       
       
            
       <ExpenseList items={filteredExpenses}/>
       
       
    </Card>
    
    
)
}
export default Expenses;
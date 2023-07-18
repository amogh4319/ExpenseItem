import NewExpenses from './components/NewExpenses';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
const App=()=> {
  const [expenses,setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      place:'Belagavi',
    },
    { 
      id: 'e2', 
      title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      place:'Banglore', 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place:'Hydrabad',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      place:'chennai',
    },
  ]);
  const addExpenseHandler=(expenseData)=>{
    setExpenses((expenses)=>[expenseData,...expenses]
      
    )
  }
  return (
    <div>
      
     <NewExpenses onExpenseRecieved={addExpenseHandler}/>
     <Expenses items={expenses}></Expenses>
     
    </div>
  );
}

export default App;

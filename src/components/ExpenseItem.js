import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            
           <ExpenseDetails  amount={props.amount} place={props.place} title={props.title}/>
        </div>
    

     
    );
}
export default ExpenseItem;
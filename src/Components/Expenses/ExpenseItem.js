import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import { useState } from 'react';


const ExpenseItem = (props) => {
  // useState array - Default state value => variable
  //          -  a function for updating the state
  
  // const [title, setTitle] = useState(props.title)
  
  // const clickHandler = () => {
  //   setTitle('updated')
  //   console.log(title)
  // }
  // console.log("in expenseItem : ", props.date)
  
  return (
    <li>
      <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
          </div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;

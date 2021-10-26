import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDateHandler = (enteredExpeseData) => {
        const expenseData = {
            ...enteredExpeseData,
            id : Math.random().toString()
        }
        // console.log('newExpense.js : ', expenseData)
        props.onAddExpense(expenseData) // value from APP.js parent component
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseDate={saveExpenseDateHandler} /> }
        </div>
    )
}

export default NewExpense;
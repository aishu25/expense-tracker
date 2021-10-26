
import ExpensesFilter from '../Expenses/ExpensesFilter';
import ExpsenseList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear , setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('expense,js :',selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
    <div>
        <Card className="expenses">
        <ExpensesFilter 
            onChangeFilter={filterChangeHandler} 
            selected={filteredYear} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpsenseList items={filteredExpenses}/>
        </Card>
    </div>
  );
}

export default Expenses;
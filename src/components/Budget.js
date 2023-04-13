import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext); 

    const handleBudgetChange = (event) => {
        const newBudget = Number(event.target.value);

        if (newBudget > 20000) {
            alert('Budget cannot be greater than $20,000');
            return;
        }

        dispatch({ type: 'SET_BUDGET', payload: newBudget });
};


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                type='number'
                min='0'
                max='20000'
                value={budget}
                onChange={handleBudgetChange}
            />
            </span>
        </div>
    );
};
export default Budget;


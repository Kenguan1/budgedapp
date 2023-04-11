import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleChangeCurrency = (e) => {
        const currency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
            <div className='row'>
                <div className='input-group'>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect07">Currency</label>
                    </div>
                        <select onChange={handleChangeCurrency} className='custom-select' id="inputGroupSelect07" defaultValue="£">
                            <option value="£">Pound (£)</option>
                            <option value="€">Euro (€)</option>
                            <option value="$">Dollar ($)</option>
                            <option value="₹">Ruppee (₹)</option>
                        </select>
                </div>
            </div>
    );
};
export default Currency;
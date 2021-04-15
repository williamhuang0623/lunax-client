import React from 'react';
import OrderAPI from '../lib/api/Order';

const Form = (props) => {
    return (
        <div className="create-order">
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link" required />
                <label htmlFor="quantity_ordered">Quantity wanted:</label>
                <input type="text" id="quantity_ordered" name="quantity_ordered" required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Form;

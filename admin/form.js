import React from 'react';

import OrderAPI from '../lib/api/Order';

const Form = () => {
    const createOrder = async (event) => {
        event.preventDefault();
        const orderAPI = new OrderAPI();
        await orderAPI.postOrder({
            link: event.target.link.value,
            quantity_ordered: event.target.quantity_ordered.value,
        });
    };
    return (
        <div className="create-order">
            <form onSubmit={createOrder}>
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

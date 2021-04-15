import React, { useState, useEffect, useLayoutEffect } from 'react';
import { adminStyles } from './style';
import Form from './orderform';
import OrderList from './orderlist';
import OrderAPI from '../lib/api/Order';

function AdminDashboard(props) {
    const [orders, setOrders] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation goes here
        const updated = await new OrderAPI().postOrder({
            link: event.target.link.value,
            quantity_ordered: event.target.quantity_ordered.value,
        });

        setOrders([updated, ...orders]);
    };

    useEffect(async () => {
        const orderapi = new OrderAPI();
        const res = await orderapi.getAllOrders();

        setOrders([...res]);
    }, orders);

    return (
        <>
            <div className="buffer" />
            <div className="admin-container">
                <Form handleSubmit={handleSubmit} />
                <OrderList orders={orders} />
            </div>
            <style jsx>{adminStyles}</style>
        </>
    );
}

export default AdminDashboard;

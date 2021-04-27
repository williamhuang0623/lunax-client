import React from 'react';
import { Button } from '@material-ui/core';
import { useTable, useSortBy } from 'react-table';
import Order from '../component/Order';
function OrderList({ orders, handleDelete }) {
    return (
        <div className="order-list">
            {orders.map((order) => (
                <Order order={order} handleDelete={handleDelete} />
            ))}
        </div>
    );
}

export default OrderList;

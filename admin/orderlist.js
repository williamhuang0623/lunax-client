import React, { useState } from 'react';
import OrderAPI from '../lib/api/Order';

function OrderList({ data }) {
    return (
        <ul>
            {/* {data.orders.map((order) => (
                <li key={order._id}>
                    {order.status} | {order.link} | {order.quantity_ordered} | {order.createdAt} |
                    {order.updatedAt}
                </li>
            ))} */}
        </ul>
    );
}

export default OrderList;

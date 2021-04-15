import React from 'react';
import { adminStyles } from './style';
import Form from './orderform';
import OrderList from './orderlist';

function AdminDashboard() {
    return (
        <>
            <div className="buffer" />
            <div className="admin-container">
                <Form />
                <OrderList />
            </div>
            <style jsx>{adminStyles}</style>
        </>
    );
}

export default AdminDashboard;

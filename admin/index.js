import React, { useState, useEffect } from 'react';
import { adminStyles } from './style';
import { makeStyles } from '@material-ui/styles';

import Form from './orderform';
import OrderList from './orderlist';
import OrderAPI from '../lib/api/Order';
import AddIcon from '@material-ui/icons/Add';
import {
    Container,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    order_list_header: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
    },
}));

function AdminDashboard(props, { user }) {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation goes here
        const updated = await new OrderAPI().postOrder({
            link: event.target.link.value,
            quantity_ordered: event.target.quantity_ordered.value,
        });

        setOrders([updated, ...orders]);
        handleClose();
    };

    useEffect(async () => {
        const orderapi = new OrderAPI();
        const res = await orderapi.getAllOrders();
        setOrders([...res]);
    }, []);

    const deleteOrder = async (order_id) => {
        const deleted = await new OrderAPI().deleteOrder(order_id);
        const newOrderList = orders.filter((item) => item._id !== deleted.deleted_id);
        setOrders([...newOrderList]);
    };
    const cancelOrder = async (order_id) => {
        const canceled = await new OrderAPI().cancelOrder(order_id);
        const newOrderList = orders.filter((item) => item.status !== 'canceled');
        setOrders([...newOrderList]);
    };

    return (
        <>
            <div className="buffer" />
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Typography color="primary" component="h3" variant="h3">
                        Order List
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        <AddIcon /> New
                    </Button>
                    {user}
                </div>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">New Order</DialogTitle>
                    <DialogContent>
                        <Form handleSubmit={handleSubmit} />
                    </DialogContent>
                </Dialog>
                <OrderList orders={orders} handleDelete={deleteOrder} handleCancel={cancelOrder} />
            </Container>
            <style jsx>{adminStyles}</style>
        </>
    );
}

export default AdminDashboard;

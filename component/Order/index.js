import React from 'react';
import { orderStyle } from './style';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    SkipPreviousIcon,
    SkipNextIcon,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 20,
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    content: {
        flex: '1 0 auto',
        flexDirection: 'row',
    },
    cover: {
        margin: 15,
        width: 128,
        height: 128,
    },
    controls: {
        flex: '1 0 auto',
        marginTop: 60,
        marginRight: 30,
    },
}));

const Order = ({ order, handleDelete, handleCancel }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={
                    order.product_image_url
                        ? order.product_image_url
                        : 'https://pbs.twimg.com/profile_images/1366407963435560962/3qsLxc7t.jpg'
                }
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {order.product_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {order.product_price}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Ordered: {order.quantity_ordered}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Filled: {order.quantity_filled}
                    </Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Times Ran: {order.times_ran}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Flow State: {order.flow_state}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Status: {order.status}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Last Update: {order.updatedAt.split('T')[0]}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleCancel(order._id)}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Order;

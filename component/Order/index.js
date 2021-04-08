import React from 'react';
import { orderStyle } from './style';

function Order(props) {
    return (
        <>
            <div className="order">{props.children}</div>
            <style jsx>{orderStyle}</style>
        </>
    );
}

export default Order;

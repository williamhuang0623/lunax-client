import React from 'react';
import OrderAPI from '../lib/api/Order';
import { FormControl, InputLabel, Input, TextField, Button } from '@material-ui/core';

const Form = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <TextField color="primary" id="link" name="link" label="Link" />
                </div>
                <TextField
                    color="primary"
                    id="quantity_ordered"
                    name="quantity_ordered"
                    label="Quantity"
                />

                <Button color="primary" type="submit">
                    Create
                </Button>
            </form>
        </>
    );
};

export default Form;

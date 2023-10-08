import React from 'react';
import {Datagrid, EditButton, EmailField, List, ReferenceInput, TextField, TextInput} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
const OrderList = () => {
    return (
        <List filters={postFilters}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="user_uuid" />
                <TextField source="order_uuid" />
                <TextField source="status" />
            </Datagrid>
        </List>
    );
};

export default OrderList;
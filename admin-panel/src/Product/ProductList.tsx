import React from 'react';
import {
    BooleanField,
    Datagrid,
    EditButton,
    List,
    TextField,
    TextInput
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
const ProductList = () => {
    return (
        <List filters={postFilters}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="price" />
                <TextField source="count" />
                <BooleanField source="is_active" label="Active" />
                <EditButton />
            </Datagrid>
        </List>
    )
};

export default ProductList;
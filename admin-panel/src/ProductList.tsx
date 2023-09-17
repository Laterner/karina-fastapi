import React from 'react';
import {Datagrid, EditButton, List, ReferenceInput, TextField, TextInput} from "react-admin";

interface IProduct {
    category: string
    id: number
    name: string
    price: number
}

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
                <EditButton />
            </Datagrid>
        </List>
    )
};

export default ProductList;
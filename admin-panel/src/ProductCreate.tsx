import React from 'react';
import {Create, ReferenceInput, SimpleForm, TextField, TextInput} from "react-admin";

const ProductCreate = () => {
    return (
        <Create>
            <SimpleForm>
            <ReferenceInput source="id" reference="users" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="category" />
            <TextField source="count" />
            </SimpleForm>
        </Create>
    );
};

export default ProductCreate;
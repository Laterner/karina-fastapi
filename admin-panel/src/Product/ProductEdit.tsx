import {
    Edit,
    SimpleForm,
    TextInput,
    required, BooleanInput,
} from "react-admin";
import React from "react";

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="price" validate={required()} />
            <TextInput source="count" validate={required()} />
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export default ProductEdit
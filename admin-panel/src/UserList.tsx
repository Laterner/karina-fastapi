import React from 'react';
import {Datagrid, EditButton, EmailField, List, ReferenceInput, TextField, TextInput} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
const UserList = () => {
    return (
        <List filters={postFilters}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="phone" />
                <TextField source="name" />
                <EmailField source="email" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default UserList;
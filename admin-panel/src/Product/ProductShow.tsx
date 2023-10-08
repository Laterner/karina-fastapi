import React from 'react';
import {BooleanField, EditButton, PrevNextButtons, Show, SimpleShowLayout, TextField, TopToolbar} from "react-admin";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';


const ProductShow = () => {
    return (
        <Show
            actions={
                <TopToolbar>
                    <PrevNextButtons linkType="show"/>
                    <EditButton />
                </TopToolbar>
            }
        >
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="price" />
                <TextField source="count" />
                <BooleanField source="is_active" label="Active" valueLabelFalse='Not Active' valueLabelTrue='Active' />
            </SimpleShowLayout>
        </Show>
    );
};

export default ProductShow;
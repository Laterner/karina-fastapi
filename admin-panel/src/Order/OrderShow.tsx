import React from 'react';
import {Show, SimpleShowLayout, TextField, TopToolbar, PrevNextButtons} from "react-admin";

const OrderShow = () => {
    return (
        <Show
            actions={
                <TopToolbar>
                    <PrevNextButtons linkType="show"/>
                </TopToolbar>
            }
        >
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="order_uuid" />
                <TextField source="product_id" />
                <TextField source="count" />
                <TextField source="product_price" />
            </SimpleShowLayout>
        </Show>
    )
};

export default OrderShow;
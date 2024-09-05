import React from 'react';
import OrderListHead from './OrderListHead';
import OrderListItem from './OrderListItem';

const OrderPanelItem = ({title, count, type}) => {
    return (
        <div className="orders_panel_item">
            <div className="order_header">
                <h2 className={`title ${type}`}>{title}</h2>
                <p>{count}</p>
            </div>

            <div className="order_list">

                <OrderListHead />

                <OrderListItem type={type} />
                <OrderListItem type={type} />
                <OrderListItem type={type} />

            </div>

        </div>
    );
};

export default OrderPanelItem;
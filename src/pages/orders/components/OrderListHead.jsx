import React from 'react';

const OrderListHead = () => {
    return (
        <div className="order_list_head">
            <div className="order_list_column number">№</div>
            <div className="order_list_column name">Имя</div>
            <div className="order_list_column">Заказ</div>
        </div>
    );
};

export default OrderListHead;
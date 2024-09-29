import React from 'react';
import Store from '../../../Store';

const OrderListItem = ({type}) => {

    const openPopUp = () => {
        Store.setListener('orderDetail', 'show')
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className={`order_list_item ${type}`} draggable onClick={openPopUp}>
            <div className="number">1</div>
            <div className="order_list_column name">Курбанов С.И.</div>
            <div className="order_list_column">5000 руб.</div>
        </div>
    );
};

export default OrderListItem;
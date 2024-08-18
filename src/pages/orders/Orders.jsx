import React, { useEffect } from 'react';
import './css/orders.css'
import Store from '../../Store';

const Orders = () => {

    useEffect(() => {

        Store.setListener('title', 'Заказы')

    }, [])

    return (
        <div className='orders container'>
            <div className="orders_item new">
                <div className="orders_header">
                    <h2>Новые</h2>
                    <p>10</p>
                </div>
                <div className="order_list">
                    <div className="orders_list_item">
                        <h3 className='name'>Курбанов Сайпи</h3>
                    </div>
                </div>
            </div>
            <div className="orders_item proces">
                <div className="orders_header">
                    <h2>В работе</h2>
                    <p>5</p>
                </div>
            </div>
            <div className="orders_item finish">
                <div className="orders_header">
                    <h2>Завершённые</h2>
                    <p>32</p>
                </div>
            </div>
        </div>
    );
};

export default Orders;
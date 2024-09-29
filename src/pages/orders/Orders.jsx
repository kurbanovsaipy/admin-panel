import React, { useEffect } from 'react';
import './css/orders.css'
import Store from '../../Store';
import OrderStatistic from './components/OrderStatistic';
import OrderPanel from './components/OrderPanel';

const Orders = () => {

    useEffect(() => {
        Store.setListener('title', 'Заказы')
    }, [])

    return (
        <div className='orders container'>

            <OrderStatistic />
            
            <OrderPanel />
            
        </div>
    );
};

export default Orders;
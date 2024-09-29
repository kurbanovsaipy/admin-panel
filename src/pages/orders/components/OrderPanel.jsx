import React from 'react';
import OrderPanelItem from './OrderPanelItem';

const OrderPanel = () => {
    return (
        <div className="orders_panel">

            <OrderPanelItem title={'Новые заказы'} count={236} type={'new'}/>

            <OrderPanelItem title={'В работе'} count={103} type={'in_progress'}/>

            <OrderPanelItem title={'Завершенные'} count={20} type={'done'}/>

        </div>
    );
};

export default OrderPanel;
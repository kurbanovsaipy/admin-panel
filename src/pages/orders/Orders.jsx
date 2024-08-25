import React, { useEffect } from 'react';
import './css/orders.css'
import Store from '../../Store';

const Orders = () => {

    useEffect(() => {
        Store.setListener('title', 'Заказы')
    }, [])

    return (
        <div className='orders container'>
            <div className="new_orders">
                <div className="new_order_header">
                    <h2 className="title">Новые заказы</h2>
                    <p>1032</p>
                </div>
                <div className="new_order_list">

                    <div className="new_order_list_item">
                        <p className="numder">1</p>
                        <div className="user">
                            <div className="name">Курбанов С.И.</div>
                            <div className="price">5000 руб.</div>
                        </div>
                        <div className="products">
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47614/dc39bb86ee7ecbfcba691b89ca3f71aa.jpg?v=0_47614.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47795/28f624f93397bc6338c5cfe5ce9c9f2d.jpg?v=0_47795.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/48068/2cb785a44635e43e87ac37786e01c425.jpg?v=0_48068.0'} alt="" />
                            </div>
                            <div className="products_item more">3+</div>
                        </div>
                    </div>

                    <div className="new_order_list_item">
                        <p className="numder">2</p>
                        <div className="user">
                            <div className="name">Османова С.И.</div>
                            <div className="price">5000 руб.</div>
                        </div>
                        <div className="products">
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47614/dc39bb86ee7ecbfcba691b89ca3f71aa.jpg?v=0_47614.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47795/28f624f93397bc6338c5cfe5ce9c9f2d.jpg?v=0_47795.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/48068/2cb785a44635e43e87ac37786e01c425.jpg?v=0_48068.0'} alt="" />
                            </div>
                            <div className="products_item more">3+</div>
                        </div>
                    </div>

                    <div className="new_order_list_item">
                        <p className="numder">3</p>
                        <div className="user">
                            <div className="name">Халилов С.И.</div>
                            <div className="price">5000 руб.</div>
                        </div>
                        <div className="products">
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47614/dc39bb86ee7ecbfcba691b89ca3f71aa.jpg?v=0_47614.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/47795/28f624f93397bc6338c5cfe5ce9c9f2d.jpg?v=0_47795.0'} alt="" />
                            </div>
                            <div className="products_item">
                                <img src={'https://static.lichi.com/product/48068/2cb785a44635e43e87ac37786e01c425.jpg?v=0_48068.0'} alt="" />
                            </div>
                            <div className="products_item more">3+</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="orders_panel">
                <div className="order_statistics">
                    <h2 className="title">Статистика</h2>
                    <div className="statistic_wrapper">
                        <div className="all_orders">
                            <div className="all_orders_wrapper">
                                <h3>Всего</h3>
                                <p>1250</p>

                                <svg width={`180px`} height={`180px`}>
                                    <circle class="order_circle done" 
                                        cx = {90} 
                                        cy = {90}
                                        r  = {80}

                                        style={{
                                            strokeDasharray: 503,
                                            strokeDashoffset: `calc(${503} - (${503} * ${100}) / 100)`
                                        }}
                                    ></circle>
                                </svg>

                                <svg width={`180px`} height={`180px`}>
                                    <circle class="order_circle in_progress" 
                                        cx = {90} 
                                        cy = {90}
                                        r  = {80}

                                        style={{
                                            strokeDasharray: 503,
                                            strokeDashoffset: `calc(${503} - (${503} * ${80}) / 100)`
                                        }}
                                    ></circle>
                                </svg>

                                <svg width={`180px`} height={`180px`}>
                                    <circle class="order_circle new" 
                                        cx = {90} 
                                        cy = {90}
                                        r  = {80}

                                        style={{
                                            strokeDasharray: 503,
                                            strokeDashoffset: `calc(${503} - (${503} * ${60}) / 100)`
                                        }}
                                    ></circle>
                                </svg>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orders_list">

                </div>
            </div>
        </div>
    );
};

export default Orders;
import React from 'react';

const Orders = () => {
    
    return (
        <div className="orders_vidget card">
            <div className="content">
                <div className="header_block">
                    <h3 className="title">Заказы</h3>
                    <a href="">Подробнее</a>
                </div>
                <div className="progress">

                    <p className="count">14000</p>

                    <svg width={`180px`} height={`180px`}>
                        <circle class="order_circle done" 
                        cx = {90} 
                        cy = {90}
                        r  = {60}

                        style={{
                            stroke: '#fff',
                            strokeDasharray: 377,
                            strokeDashoffset: `calc(${377} - (${377} * ${100}) / 100)`
                        }}
                        ></circle>
                    </svg>

                    <svg width={`180px`} height={`180px`}>
                        <circle class="order_circle current" 
                        cx = {90} 
                        cy = {90}  
                        r  = {65}

                        style={{
                            stroke: 'rgb(255, 244, 85)',
                            strokeDasharray: 409,
                            strokeDashoffset: `calc(${409} - (${409} * ${80}) / 100)`
                        }}
                        ></circle>
                    </svg>

                    <svg width={`180px`} height={`180px`}>
                        <circle class="order_circle" 
                        cx = {90} 
                        cy = {90}  
                        r  = {70}

                        style={{
                            stroke: 'aqua',
                            strokeDasharray: 440,
                            strokeDashoffset: `calc(${440} - (${440} * ${60}) / 100)`
                        }}
                        ></circle>
                    </svg>
            
                </div>
                <div className="marks">
                    <div className="mark_item new">Новые</div>
                    <div className="mark_item current">В работе</div>
                    <div className="mark_item done">Завершенные</div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
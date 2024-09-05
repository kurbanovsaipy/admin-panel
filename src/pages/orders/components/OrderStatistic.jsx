import React from 'react';

const OrderStatistic = () => {
    return (
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

                <div className="graphic">
                    <div className="graphic_list">
                        <div className="scale new" style={{height: `${50 + 20}%`}}>
                            <h5 className="count">170</h5>
                        </div>
                        <div className="scale in_progress" style={{height: `${10 + 20}%`}}>
                            <h5 className="count">67</h5>
                        </div>
                        <div className="scale done" style={{height: `${30 + 20}%`}}>
                            <h5 className="count">60</h5>
                        </div>
                    </div>
                    {/* <div className='appointments'>
                        <p className='new'>Новые</p>
                        <p className='in_progress'>В работе</p>
                        <p className='done'>Завершенные</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OrderStatistic;
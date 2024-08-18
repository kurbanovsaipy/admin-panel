import React from 'react';
import users from './../images/users.svg'
import bag from './../images/shop-bag.svg'
import notes from './../images/notes.svg'

const Statistics = () => {
    return (
        <div className="statistic">
            <div className="statistic_item">
                <img src={users} alt="" />
                <div className="description">
                    <h3>Пользователей</h3>
                    <p>320 активных</p>
                </div>
            </div>
            <div className="statistic_item">
                <img src={bag} alt="" />
                <div className="description">
                    <h3>Товаров</h3>
                    <p>1540 шт.</p>
                </div>
            </div>
            <div className="statistic_item">
                <img src={notes} alt="" />
                <div className="description">
                    <h3>Заметок</h3>
                    <p>15 записей</p>
                </div>
            </div>
            <div className="statistic_item">
            </div>
        </div>
    );
};

export default Statistics;
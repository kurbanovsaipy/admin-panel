import React, { useState } from 'react';
import './css/popups.css'
import Store from '../../Store';


const Orders = () => {

    const [isOpen, setIsOpen] = useState(false)

    Store.useListener('orderDetail', setIsOpen)

    const closePopUp = () => {
        setIsOpen('close')
        document.body.style.overflow = 'visible'
    }

    if(!isOpen) return null

    return (
        <div className={`orders_popup ${isOpen}`}>
            
            <div className="product_list">

            </div>

            <div className="order_info">

                <div className="main_cross" onMouseDown={closePopUp}></div>
                
                <h3 className="title">Общая информация</h3>

                <div className="info_field">
                    <div className="label">ФИО</div>
                    <p>Курбанов Сайпи Ильясович</p>
                </div>

                <div className="info_field">
                    <div className="label">E-mail</div>
                    <p>kurbanov@sajp@gmail.com</p>
                </div>

                <div className="info_field">
                    <div className="label">Телефон</div>
                    <p>+7(978)0820476</p>
                </div>

                <div className="line"></div>

                <h3 className="title">Доставка</h3>

                <div className="info_field">
                    <div className="label">Способ доставки</div>
                    <p>Почта России</p>
                </div>

                <div className="info_field">
                    <div className="label">Адресс</div>
                    <p>РК г. Симферополь, с. Аграрное, д-16, кв-3</p>
                </div>

                <div className="line"></div>

                <div className="main_info">Товаров: 10 шт.</div>
                <div className="main_info">Статус: В работе</div>
                <div className="main_info">Способ оплаты: Картой</div>

                <div className="order_price">
                    <h4>Итого:</h4>
                    <p>2000.00 рублей</p>
                </div>

            </div>
        </div>
    );
};

export default Orders;
import React, { useEffect, useState } from 'react';
import useUser from '../hooks/useUser';

const User = () => {

    const user = useUser()

    return (
        <div className="user">
            <div className="number">1</div>
            <div className="name">Курбанов С.И.</div>
            <div className="phone">+79780820476</div>
            <div className="status">активный</div>
            <div className="burger" onClick={(e) => user.toggleMenu(e)}>
                <span></span><span></span><span></span>
            </div>

            <div className={`user_nav ${user.isOpen}`} onClick={(e) => e.stopPropagation()}>
                <div className="user_nav_wrapper">
                    <p>Заблокировать</p>
                    <p>Удалить</p>
                </div>
            </div>
        </div>
    );
};

export default User;
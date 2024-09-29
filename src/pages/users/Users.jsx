import React, { useEffect } from 'react';
import Store from '../../Store';
import './css/users.css';
import User from './components/User';


const Users = () => {

    useEffect(() => {
        Store.setListener('title', 'Пользователи')
    }, [])
    
    return (
        <div className='users container'>
            <User />
        </div>
    );
};

export default Users;
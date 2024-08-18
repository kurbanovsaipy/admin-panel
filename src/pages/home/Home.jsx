import React, { useEffect } from 'react';
import Store from '../../Store';
import './css/home.css';
import Weather from './components/Weather';
import Notes from './components/Notes';
import Orders from './components/Orders';
import Statistics from './components/Statistics';

const Home = () => {

    useEffect(() => {
        Store.setListener('title', 'Главная')
    }, [])

    return (
        <div className='home container'>
            <div className="vidgets">
                <Notes />
                <div className="vidgets_item flex">
                    <Orders />
                    <Weather />
                </div>
            </div>
            <Statistics />
        </div>
    );
};

export default Home;
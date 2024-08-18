import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Orders from './pages/orders/Orders';
import Magazine from './pages/magazine/Magazine';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';

const MainContainer = () => {

    return (
        <div className="main_container">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path='/store' element={<Magazine />}/>
                <Route path='/categories' element={<Categories />}/>
            </Routes>
        </div>
    );
};

export default MainContainer;
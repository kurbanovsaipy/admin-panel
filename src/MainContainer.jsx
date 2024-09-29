import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Orders from './pages/orders/Orders';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';

const MainContainer = () => {

    return (
        <div className="main_container">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path='/categories' element={<Categories />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/users' element={<Users />}/>
            </Routes>
        </div>
    );
};

export default MainContainer;
import React, { useEffect, useState } from 'react';
import './css/product.css'
import Store from '../../Store';
import ProductItem from './components/ProductItem';
import Filters from './components/Filters';
import FiltersBlock from './components/FiltersBlock';
import ProductList from './components/ProductList';

const Products = () => {

    useEffect(() => {
        Store.setListener('title', 'Товары')
    }, [])

    return (
        <div className='products container'>

            <FiltersBlock />

            <ProductList />

            <Filters />

        </div>
    );
};

export default Products;
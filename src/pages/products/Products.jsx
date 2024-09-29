import React, { useEffect } from 'react';
import './css/product.css'
import Store from '../../Store';
import ProductItem from './components/ProductItem';
import Button from '../../components/button/Button';
import Filters from './components/Filters';

const Products = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        Store.setListener('title', 'Товары')
    }, [])

    const openFilter = () => {
        Store.setListener('filter', 'open')
    }

    return (
        <div className='products container'>

            <div className="product_filters">
                <Button mode={'fill'} title={'Добавить товар'}/>

                <div className="button_block">
                    <div className="get_filter" onClick={openFilter}>Фильтры</div>
                    
                    <div className="sorting">
                        <p>Сортировка</p>
                    </div>
                </div>
                
            </div>

            <div className="products_list">

                <ProductItem image={'https://static.lichi.com/product/47743/91deba5e3e4b71e4c93c49a466eadcc3.jpg?v=0_47743.0'} />
                <ProductItem image={'https://static.lichi.com/product/47939/fb2f75a5cf46d9f38f3d56e17ddb30b7.jpg?v=0_47939.0'}/>
                <ProductItem image={'https://static.lichi.com/product/47761/aa723801eabc0fc5d35750160060e3c6.jpg?v=0_47761.0'}/>
                <ProductItem image={'https://static.lichi.com/product/46918/034ed4bf737fd3eb67165f6c96421121.jpg?v=0_46918.0'}/>

            </div>

            <Filters />

        </div>
    );
};

export default Products;
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <div className="products_list">

            <ProductItem image={'https://static.lichi.com/product/47743/91deba5e3e4b71e4c93c49a466eadcc3.jpg?v=0_47743.0'} />
            <ProductItem image={'https://static.lichi.com/product/47939/fb2f75a5cf46d9f38f3d56e17ddb30b7.jpg?v=0_47939.0'}/>
            <ProductItem image={'https://static.lichi.com/product/47761/aa723801eabc0fc5d35750160060e3c6.jpg?v=0_47761.0'}/>
            <ProductItem image={'https://static.lichi.com/product/46918/034ed4bf737fd3eb67165f6c96421121.jpg?v=0_46918.0'}/>

        </div>
    );
};

export default ProductList;
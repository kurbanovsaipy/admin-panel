import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Store from '../../../Store';
import Api from '../../../Api';
import useProducts from '../hooks/useProducts';
import Loading from '../../../components/loading/Loading';
import LoadingGeneral from '../../../components/loading/LoadingGeneral';

const ProductList = () => {

    const products = useProducts()

    return (
        <>

            {products.load ? 
                <div className='products_list'>
                    {products.list?.map((el) => (
                        <ProductItem el={el} key={el.shadeid}/>
                    ))}
                </div>
            :<LoadingGeneral mode={'onpage'}/>}

        </>
    );
};

export default ProductList;
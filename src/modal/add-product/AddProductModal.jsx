import React from 'react';
import useAddProduct from './hooks/useAddProdact';

import './css/add_product_modal.css';
import ProductForm from './components/ProductForm';
import Slider from './components/Slider';

const AddProductModal = () => {
    const product = useAddProduct()

    if(!product.isOpen) return

    return (
        <div className={`add_product_modal`} ref={product.productModal}>
            <Slider />
            
            <ProductForm closeModal={product.closeModal}/>
        </div>
    );
};

export default AddProductModal;
import React, { useEffect } from 'react';
import Store from '../../Store';
import './css/categories.css'
import img from './images/platya.jpg'

const Categories = () => {

    useEffect(() => {
        Store.setListener('title', 'Категории')
    }, [])

    const openUpdateCategoriesPopUp = () => {

    }

    const openCategoriesPopUp = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('categoriesPopUp', 'show')
    }

    return (
        <div className='categories container'>
            <div className="categories_item" onMouseDown={() => openUpdateCategoriesPopUp()}>
                <img src={img} className='back_image' alt="" />
                <h3 className='title'>Платья</h3>
            </div>
            <div className="categories_item add" onMouseDown={openCategoriesPopUp}><span className='cross'></span></div>
        </div>
    );
};

export default Categories;
import React, { useEffect } from 'react';
import Store from '../../Store';
import { NavLink } from 'react-router-dom';
import './css/categories.css'
import img from './images/platya.jpg'

const Categories = () => {

    useEffect(() => {
        Store.setListener('title', 'Категории')
    }, [])

    const openUpdateCategoriesPopUp = (id) => {
        Store.setListener('categories', 'show')
        Store.setListener('categories_id', id)
        document.querySelector('html').style.overflow = 'hidden'
    }

    const openCategoriesPopUp = () => {
        Store.setListener('categories', 'show')
        document.querySelector('html').style.overflow = 'hidden'
    }

    return (
        <div className='categories container'>
            <NavLink className="categories_item" onMouseDown={() => openUpdateCategoriesPopUp(1)}>
                <img src={img} className='back_image' alt="" />
                <h3 className='title'>Платья</h3>
            </NavLink>
            <div className="categories_item add" onMouseDown={openCategoriesPopUp}><span className='cross'></span></div>
        </div>
    );
};

export default Categories;
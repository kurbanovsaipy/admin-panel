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
        document.querySelector('html').style.overflow = 'hidden'
        Store.setListener('open', 'show')
        Store.setListener('data', {
            title: 'Добавить категорию',
            image: true,
            imagePreview: null,
            form: [
                {
                    placeholder: 'Название категории',
                    value: '',
                    type: 'text'
                },
                {
                    placeholder: 'Название категории(в единственном числе)',
                    value: '',
                    type: 'text'
                },
                {
                    placeholder: 'Для мужчин',
                    value: '',
                    type: 'checkbox'
                },
                {
                    placeholder: 'Для женщин',
                    value: '',
                    type: 'checkbox'
                },
                {
                    placeholder: 'Изображение',
                    value: '',
                    type: 'file'
                }
            ],
        })
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
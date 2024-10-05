import React, { useEffect } from 'react';
import Store from '../../Store';
import './css/categories.css'
import img from './images/platya.jpg'
import useCategories from './hooks/useCategories';
import CategoriesItem from './components/CategoriesItem';

const Categories = () => {

    const categories = useCategories()

    return (
        <>
            {categories.load ? 
                <div className='categories container'>
                    {categories.categoreisList.length ? 
                        categories.categoreisList.map((el) => (
                            <CategoriesItem key={el.categoryid} el={el} callback={categories.openUpdateCategoriesPopUp} deleteItem={categories.deleteItem}/>
                        ))
                    :<></>}
                    <div className="categories_item add" onMouseDown={categories.openCategoriesPopUp}><span className='cross'></span></div>
                </div>
            :<div className='loading'>Loading...</div>}
        </>
    );
};

export default Categories;
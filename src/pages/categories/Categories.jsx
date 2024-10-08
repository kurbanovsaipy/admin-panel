import React, { useEffect } from 'react';
import Store from '../../Store';
import './css/categories.css'
import img from './images/platya.jpg'
import useCategories from './hooks/useCategories';
import CategoriesItem from './components/CategoriesItem';
import LoadingGeneral from '../../components/loading/LoadingGeneral';
import NoItems from '../../components/no_items/NoItems';

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
                    :<NoItems />}
                    <div className="categories_item add" onMouseDown={categories.openCategoriesPopUp}><span className='cross'></span></div>
                </div>
            :<LoadingGeneral />}
        </>
    );
};

export default Categories;
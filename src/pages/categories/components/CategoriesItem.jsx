import React from 'react';
import Api from '../../../Api';
import Cross from '../../../components/cross/Cross';

const CategoriesItem = ({el, callback, deleteItem}) => {
    return (
        <div className="categories_item" onMouseDown={() => callback()}>
            <Cross func={() => deleteItem(el.categoryid)}/>
            <img src={`${Api.url}images/${el.image}`} className='back_image' alt="" />
            <h3 className='title'>{el.categories_plural}</h3>
        </div>
    );
};

export default CategoriesItem;
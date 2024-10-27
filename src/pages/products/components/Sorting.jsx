import React, { useState } from 'react';
import Store from '../../../Store';

const Sorting = ({sorting}) => {

    const [value, setValue] = useState('datetimeDESC')

    const sort = (value, sort) => {
        setValue(`${value}${sort}`)
        Store.setListener('getProduct', {value: value, sort: sort})
    }

    return (
        <div className={`sorting_list ${sorting}`} onClick={(e) => e.stopPropagation()}>
            <div className="sorting_list_wrapper">
                <div className={`sorting_list_item ${value === 'datetimeDESC' ? 'active' : ''}`} onClick={() => sort('datetime', 'DESC')}>По новизне</div>
                <div className={`sorting_list_item ${value === 'priceASC' ? 'active' : ''}`} onClick={() => sort('price', 'ASC')}>По возрастанию цены</div>
                <div className={`sorting_list_item ${value === 'priceDESC' ? 'active' : ''}`} onClick={() => sort('price', 'DESC')}>По убыванию цены</div>
            </div>
        </div>
    );
};

export default Sorting;
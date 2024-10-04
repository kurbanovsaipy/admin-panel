import React, { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import Sorting from './Sorting';
import Store from '../../../Store';
import useFilters from '../hooks/useFilters';

const FiltersBlock = () => {

    const filters = useFilters()

    return (
        <div className="product_filters">
            <Button mode={'fill'} title={'Добавить товар'} callback={filters.openModal}/>

            <div className="button_block">
                <div className="get_filter" onClick={(e) => filters.openFilter(e)}>Фильтры</div>
                
                <div className="sorting">
                    <p onClick={filters.openSorting}>
                        Сортировка 
                        <svg className={filters.sorting} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                            <g className='main_icon_path'> <path d="M9 10L4 15M20 15L12 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </g>

                        </svg>
                    </p>
                    <Sorting sorting={filters.sorting}/>
                </div>
            </div>
            
        </div>
    );
};

export default FiltersBlock;
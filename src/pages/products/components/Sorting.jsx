import React from 'react';

const Sorting = ({sorting}) => {

    return (
        <div className={`sorting_list ${sorting}`} onClick={(e) => e.stopPropagation()}>
            <div className="sorting_list_wrapper">
                <div className="sorting_list_item active">По возрастанию цены</div>
                <div className="sorting_list_item">По убыванию цены</div>
                <div className="sorting_list_item">По популярности</div>
                <div className="sorting_list_item">По новизне</div>
            </div>
        </div>
    );
};

export default Sorting;
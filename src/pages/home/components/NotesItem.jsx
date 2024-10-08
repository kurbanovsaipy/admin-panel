import React from 'react';
import Api from '../../../Api';

const NotesItem = ({el, callback}) => {
    return (
        <div className="notes_list_item" onMouseDown={() => callback(1)}>
            <img src={`${Api.url}images/${el.image}`} alt="" />
            <div className="content">
                <h2 className="tem">{el?.title}</h2>
                <p className="description">
                    {el?.description}
                </p>
            </div>
        </div>
    );
};

export default NotesItem;
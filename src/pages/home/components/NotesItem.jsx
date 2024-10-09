import React from 'react';
import Api from '../../../Api';
import Cross from '../../../components/cross/Cross';

const NotesItem = ({el, callback, deleteNotes}) => {
    return (
        <div className="notes_list_item">
            <Cross mode={'small'} func={() => deleteNotes(el.notesid)}/>
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
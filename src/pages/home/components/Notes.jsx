import React from 'react';
import Store from '../../../Store';
import useNotes from '../hooks/useNotes';
import NotesItem from './NotesItem';
import LoadingGeneral from '../../../components/loading/LoadingGeneral';
import NoItems from '../../../components/no_items/NoItems';

const Notes = () => {

    const notes = useNotes()

    return (
        <div className="vidgets_item notes">
            <h2 className="title">Заметки</h2>

            <div className="notes_list_wrapper" ref={notes.wrapper}>
                {notes.load ? 
                    <>
                        {notes.notesList?.length ? 
                        <div className="notes_track" ref={notes.container} >
                            <div className='notes_list' style={{transform: `translateX(-${notes.scroll}px)`}}>
                                    {notes.notesList.map((el) => (
                                        <NotesItem key={el.notesid} el={el} callback={notes.openUpdatePopUp} deleteNotes={notes.deleteNotes}/>
                                    ))}
                            </div>
                        </div>
                        :<NoItems />}
                    </>
                :<LoadingGeneral />}
                
                <div className="all_notes" onClick={notes.openPopUp}>
                    Добавить заметки
                </div>
            </div>
        </div>
    );
};

export default Notes;
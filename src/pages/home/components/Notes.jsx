import React from 'react';
import Store from '../../../Store';

const Notes = () => {

    const openPopUp = () => {
        Store.setListener('notes', 'show')
        document.querySelector('html').style.overflow = 'hidden'
    }

    const openUpdatePopUp = (id) => {
        Store.setListener('notes', 'show')
        Store.setListener('notes_id', id)
        document.querySelector('html').style.overflow = 'hidden'
    }

    return (
        <div className="vidgets_item notes">
            <h2 className="title">Заметки</h2>
            <div className="notes_list">
                <div className="notes_list_item" onMouseDown={() => openUpdatePopUp(1)}>
                    <img src="https://static.lichi.com/product/47614/dc39bb86ee7ecbfcba691b89ca3f71aa.jpg?v=0_47614.0" alt="" />
                    <div className="content">
                        <h2 className="tem">Доделать платье</h2>
                        <p className="description">
                            Перешить кров на платье номер
                        </p>
                    </div>
                </div>
                {/*<div className="notes_list_item">

                </div>
                <div className="notes_list_item">

                </div>*/}
                <div className="all_notes" onClick={openPopUp}>
                    Добавить заметки
                </div>
            </div>
        </div>
    );
};

export default Notes;
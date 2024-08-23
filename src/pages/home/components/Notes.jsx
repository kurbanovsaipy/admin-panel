import React from 'react';
import Store from '../../../Store';

const Notes = () => {

    const openPopUp = () => {
        document.querySelector('html').style.overflow = 'hidden'
        Store.setListener('open', 'show')
        Store.setListener('data', {
            title: 'Добавить заметку',
            image: true,
            imagePreview: null,
            form: [
                {
                    placeholder: 'Тема',
                    value: '',
                    type: 'text'
                },
                {
                    placeholder: 'Описание',
                    value: '',
                    type: 'textarea'
                },
                {
                    placeholder: 'Изображение',
                    value: '',
                    type: 'file'
                }
            ],
        })
    }

    const openUpdatePopUp = () => {
        Store.setListener('open', 'show')
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
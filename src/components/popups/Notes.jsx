import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import TextArea from '../input/TextArea';
import Store from '../../Store';
import defaultImg from './images/default.svg';
import useCreateNotes from './hooks/useCreateNotes';

const Notes = () => {

    const notes = useCreateNotes()

    if(!notes.isOpen) return null

    return (
        <div className={`main_popup ${notes.isOpen}`} onMouseDown={notes.closePopUp}>
            <form action="" className="popup_form" onSubmit={(e) => notes.createNotes(e)} onMouseDown={(e) => e.stopPropagation()}>
                <div className="panel">
                    <h2 className="title">Добавить заметку</h2>
                    <div className="form_content">

                        <div className="input_wrapper">
                            <Input type={'text'} value={notes.input.title} placeholder={'Тема'} changeValue={notes.changeValue} name={'title'}/>
                        </div>

                        <div className="input_wrapper">
                            <TextArea value={notes.input.description} changeValue={notes.changeValue} placeholder={'Описание'} name={'description'}/>
                        </div>

                    </div>
                    <Button type={'submit'} title={'Сохранить'}/>
                </div>
                    
                <div className="cover">
                    <div className="image_input">
                        <label htmlFor="input_image">
                            <input id='input_image' type="file" onChange={notes.previewImg}/>
                            {notes.imagePreview ? <img src={notes.imagePreview} alt="" className="cover_image" /> : <img src={defaultImg} alt="" className="default_image" />}
                        </label>
                    </div>
                    <div className="file_input">
                        <label htmlFor="input_file">
                            <input id='input_file' type="file" onChange={notes.previewImg}/>
                            <div className='file_button'></div>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Notes;
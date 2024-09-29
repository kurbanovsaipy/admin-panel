import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import TextArea from '../input/TextArea';
import Store from '../../Store';
import defaultImg from './images/default.svg';

const Notes = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [imagePreview, setImagePreview] = useState(false)
    Store.useListener('notes', setIsOpen)

    const closePopUp = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
        setImagePreview(false)
    }

    const previewImg = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    if(!isOpen) return null

    return (
        <div className={`main_popup ${isOpen}`} onMouseDown={closePopUp}>
            <form action="" className="popup_form" onMouseDown={(e) => e.stopPropagation()}>
                <div className="panel">
                    <h2 className="title">Добавить заметку</h2>
                    <div className="form_content">

                        <div className="input_wrapper">
                            <Input type={'text'} value={''} placeholder={'Тема'} changeValue={''}/>
                        </div>

                        <div className="input_wrapper">
                            <TextArea value={''} changeValue={""} placeholder={'Описание'}/>
                        </div>

                    </div>
                    <Button title={'Сохранить'}/>
                </div>
                    
                <div className="cover">
                    <div className="image_input">
                        <label htmlFor="input_image">
                            <input id='input_image' type="file" onChange={previewImg}/>
                            {imagePreview ? <img src={imagePreview} alt="" className="cover_image" /> : <img src={defaultImg} alt="" className="default_image" />}
                        </label>
                    </div>
                    <div className="file_input">
                        <label htmlFor="input_file">
                            <input id='input_file' type="file" onChange={previewImg}/>
                            <div className='file_button'></div>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Notes;
import React, { useState } from 'react';
import ChechBox from '../input/ChechBox';
import Store from '../../Store';
import defaultImg from './images/default.svg';
import Input from '../input/Input';
import Button from '../button/Button';

const Categories = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [imagePreview, setImagePreview] = useState(false)
    Store.useListener('categoriesPopUp', setIsOpen)

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
                    <h2 className="title">Добавить категорию</h2>
                    <div className="form_content">

                        <div className="input_wrapper">
                            <Input type={'text'} value={''} placeholder={'Название категории'} changeValue={''}/>
                        </div>

                        <div className="input_wrapper">
                            <Input type={'text'} value={''} placeholder={'Название категории(в единственном числе)'} changeValue={''}/>
                        </div>

                        <div className="input_wrapper">
                            <ChechBox title={'Для мужчин'}/>
                        </div>

                        <div className="input_wrapper">
                            <ChechBox title={'Для женщин'}/>
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

export default Categories;
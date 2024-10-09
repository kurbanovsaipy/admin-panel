import React from 'react';
import ChechBox from '../input/ChechBox';
import defaultImg from './images/default.svg';
import Input from '../input/Input';
import Button from '../button/Button';
import useCreateCategories from './hooks/useCreateCategories';

const Categories = () => {

    const create = useCreateCategories()

    if(!create.isOpen) return null

    return (
        <div className={`main_popup ${create.isOpen}`} onMouseDown={create.closePopUp}>
            <form action="" className="popup_form" onMouseDown={(e) => e.stopPropagation()} onSubmit={(e) => create.createCategories(e)}>
                <div className="panel">
                    <h2 className="title">Добавить категорию</h2>
                    <div className="form_content">

                        <div className="input_wrapper">
                            <Input type={'text'} value={create.input.categories_plural} placeholder={'Название категории'} name={'categories_plural'} changeValue={create.changeValue}/>
                        </div>

                        <div className="input_wrapper">
                            <Input type={'text'} value={create.input.categories} placeholder={'Название категории(в единственном числе)'} name={'categories'} changeValue={create.changeValue}/>
                        </div>

                        <div className="input_wrapper">
                            <ChechBox title={'Для мужчин'} value={create.forMen} setValue={create.setMen}/>
                        </div>

                        <div className="input_wrapper">
                            <ChechBox title={'Для женщин'} value={create.forWomen} setValue={create.setWomen}/>
                        </div>

                    </div>
                    <Button title={'Сохранить'} type={'submit'}/>
                </div>
                    
                <div className="cover">
                    <div className="image_input">
                        <label htmlFor="input_image">
                            <input id='input_image' type="file" onChange={create.previewImgCat}/>
                            {create.imagePreview ? <img src={create.imagePreview} alt="" className="cover_image" /> : <img src={defaultImg} alt="" className="default_image" />}
                        </label>
                    </div>
                    <div className="file_input">
                        <label htmlFor="input_file">
                            <input id='input_file' type="file" onChange={create.previewImgCat}/>
                            <div className='file_button'></div>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Categories;
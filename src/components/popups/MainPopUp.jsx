import React, { useState } from 'react';
import Store from '../../Store';
import defaultImg from './images/default.svg';
import ChechBox from '../input/ChechBox';
import Input from '../input/Input';
import Button from '../button/Button';
import './css/popups.css'
import TextArea from '../input/TextArea';


const MainPopUp = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({
        title: 'Категория ремни',
        image: true,
        imagePreview: null,
        form: [
            {
                placeholder: 'Название категории',
                value: '',
                type: 'text'
            },
            {
                placeholder: 'Изображение',
                value: '',
                type: 'file'
            }
        ],
    })

    Store.useListener('open', setIsOpen)
    Store.useListener('data', setData)

    const closePopUp = () => {
        document.querySelector('html').style.overflow = 'visible'
        setIsOpen('close')
        setData({})
        // setTimeout(() => {
        //     setIsOpen(false)
        // }, 500)
    }
    
    const previewImg = (e) => {
        setData((prev) => ({...prev, form: prev.form.map((el) => {
            if(el.placeholder === 'Изображение') {
                return {
                    ...el, value: e.target.files[0]
                }
            } else {    
                return el
            }
        })}))
        setData(prev => ({...prev, imagePreview: URL.createObjectURL(e.target.files[0])}))
    }

    const changeValue = (placeholder, value) => {
        setData((prev) => ({...prev, form: prev.form.map((el) => {
            if(el.placeholder === placeholder) {
                return {
                    ...el, value: value
                }
            } else {    
                return el
            }
        })}))
    }

    if(!isOpen) return null

    return (
        <div className={`main_popup ${isOpen}`} onMouseDown={closePopUp}>
            <form action="" className="popup_form" onMouseDown={(e) => e.stopPropagation()}>
                <div className="panel">
                    <h2 className="title">{data?.title}</h2>
                    <div className="form_content">
                        {data.form?.length ?<>
                        {data.form.map((el) => (

                            <div className="input_wrapper">
                                {el.type === 'file'?<></>
                                :el.type === 'checkbox'
                                ?<ChechBox title={el.placeholder} value={el.value} setValue={changeValue}/>
                                :el.type === 'textarea'
                                ?<TextArea value={el.value} changeValue={changeValue} placeholder={el.placeholder}/>
                                :<Input type={el.type} value={el.value} placeholder={el.placeholder} changeValue={changeValue}/>}
                            </div>

                        ))}</>:<></>}
                    </div>
                    <Button title={'Сохранить'}/>
                </div>
                    
                {data.image ? 
                    <div className="cover">
                        <div className="image_input">
                            <label htmlFor="input_image">
                                <input id='input_image' type="file" onChange={previewImg}/>
                                {data.imagePreview ? <img src={data.imagePreview} alt="" className="cover_image" /> : <img src={defaultImg} alt="" className="default_image" />}
                            </label>
                        </div>
                        <div className="file_input">
                            <label htmlFor="input_file">
                                <input id='input_file' type="file" onChange={previewImg}/>
                                <div className='file_button'></div>
                            </label>
                        </div>
                    </div>
                :<></>}
                

            </form>
        </div>
    );
};

export default MainPopUp;
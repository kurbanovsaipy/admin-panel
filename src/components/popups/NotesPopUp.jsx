import React, { useEffect, useState } from 'react';
import Store from '../../Store';
import './css/popups.css';
import defaultImg from './images/default.svg'

const NotesPopUp = () => {

    const [load, setLoad] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState(false)
    const [id, setId] = useState(null)
    const [input, setInput] = useState({
        title: null,
        description: null,
        image: null
    })

    Store.useListener('notes', setIsOpen)
    Store.useListener('notes_id', setId)

    const closePopUp = () => {
        document.querySelector('html').style.overflow = 'visible'
        setIsOpen('close')
        
        setTimeout(() => {
            setIsOpen(false)
            setImage(false)
            setInput({title: null,description: null,image: null})
        }, 500)
    }

    const previewImg = (e) => {
        setInput(prev => ({...prev, image: e.target.files[0]}))
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {

        if(id) {
            
        } else {
            setLoad(true)
        }

    }, [id])

    if(!isOpen) return null

    return (
        <div className={`main_popup ${isOpen === 'show' ? 'show' : isOpen === 'close' ? 'close' : ''}`} onMouseDown={closePopUp}>
            <form action="" className="popup_form" onMouseDown={(e) => e.stopPropagation()}>
                <div className="panel">
                    <h2 className="title">Заметки</h2>
                    <div className="form_content">
                        <input type="text" value={input.title} onChange={(e) => setInput(prev => ({...prev, title: e.target.value}))} className={`main_input ${input.title ? 'active' : ''}`} placeholder='Ваш заголовок'/>
                        <textarea value={input.description} onChange={(e) => setInput(prev => ({...prev, description: e.target.value}))} name="" className={`main_input area ${input.description ? 'active' : ''}`} id="" placeholder='Описание...' rows={5}></textarea>
                    </div>
                    <div className="main_button">Сохранить</div>
                </div>
                <div className="cover">
                    <div className="image_input">
                        <label htmlFor="input_image">
                            <input id='input_image' type="file" onChange={previewImg}/>
                            {image ? <img src={image} alt="" className="cover_image" /> : <img src={defaultImg} alt="" className="default_image" />}
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

export default NotesPopUp;
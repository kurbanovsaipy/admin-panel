import React, { useEffect, useState } from 'react';
import defaultImg from './images/default.svg'
import Store from '../../Store';
import man from './images/man.svg'

const CategoriesPopUp = () => {
    const [load, setLoad] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState(false)
    const [id, setId] = useState(null)
    const [input, setInput] = useState({
        categories: null,
        categories_plural: null,
        for_man: false,
        for_woman: false,
        image: null
    })
    const [categotyDetail, setCategoryDetail] = useState({})

    Store.useListener('categories', setIsOpen)
    Store.useListener('categories_id', setId)

    const closePopUp = () => {
        document.querySelector('html').style.overflow = 'visible'
        setIsOpen('close')
        
        setTimeout(() => {
            setIsOpen(false)
            setImage(false)
            setInput({categories: null,categories_plural: null,for_man: false,for_woman: false,image: null})
            setId(null)
            setCategoryDetail({})
        }, 500)
    }

    const previewImg = (e) => {
        setInput(prev => ({...prev, image: e.target.files[0]}))
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {

        if(id) {
            setCategoryDetail({categories: 'Ремни'})
        } else {
            setLoad(true)
        }

    }, [id])

    if(!isOpen) return null

    return (
        <div className={`main_popup ${isOpen === 'show' ? 'show' : isOpen === 'close' ? 'close' : ''}`} onMouseDown={closePopUp}>
            <form action="" className="popup_form" onMouseDown={(e) => e.stopPropagation()}>
                <div className="panel">
                    <h2 className="title">{categotyDetail.categories ? `Категория ${categotyDetail.categories}` : 'Добавить новую категорию'}</h2>
                    <div className="form_content">
                        <input type="text" className={`main_input ${input.categories ? 'active' : ''}`} value={input.categories} onChange={(e) => setInput(prev => ({...prev, categories: e.target.value}))} placeholder='Название категории'/>
                        <input type="text" className={`main_input ${input.categories_plural ? 'active' : ''}`} value={input.categories_plural} onChange={(e) => setInput(prev => ({...prev, categories_plural: e.target.value}))} placeholder='Название категории(в единственном числе)'/>
                        <div className="ckeck-box_block">
                            <div className={`checkbox ${input.for_man ? 'active' : ''}`} onMouseDown={() => setInput(prev => ({...prev, for_man: !prev.for_man}))}>
                                <span></span>
                                <p>Для мужчин</p>
                            </div>
                            <div className={`checkbox ${input.for_woman ? 'active' : ''}`} onMouseDown={() => setInput(prev => ({...prev, for_woman: !prev.for_woman}))}>
                                <span></span>
                                <p>Для женщин</p>
                            </div>
                        </div>
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

export default CategoriesPopUp;
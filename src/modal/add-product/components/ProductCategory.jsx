import React, { useCallback, useEffect, useRef, useState } from 'react';

const ProductCategory = () => {
    const [isOpen, setIsOpen] = useState(false)
    const list = useRef(null)
    const wrapper = useRef(null)
    const arrow = useRef(null)

    const toggleList = (e) => {
        e.stopPropagation()
        if(isOpen) {
            closeList()
        } else {
            setIsOpen(true)
            const H = wrapper.current.offsetHeight
            list.current.style.height = `${H}px`
            arrow.current.style.transform = 'rotate(0deg)'
        }
    }

    const closeList = () => {
        setIsOpen(false)
        list.current.style.height = `0px`
        arrow.current.style.transform = 'rotate(180deg)'
    }

    useEffect(() => {
        window.addEventListener('click', closeList)

        return () => {
            window.removeEventListener('click', closeList)
        }
    })

    return (
        <div className="product_category" onClick={toggleList}>
            <div className='category_wrapper'> <h4 className='product__label'>Категория:</h4> сумки</div>
            
            <svg ref={arrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)">

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                <g className='main_icon_path'> <path d="M9 10L4 15M20 15L12 7" strokeWidth="3" strokeLinejoin="round"/> </g>

            </svg>

            <div className={`category_list ${isOpen && 'active'}`} onClick={(e) => e.stopPropagation()} ref={list}>
                <div className="category_list_wrapper" ref={wrapper}>
                    <div className="category_list_item active">Сумки</div>
                    <div className="category_list_item">Кошельки</div>
                    <div className="category_list_item">Картхолдеры</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
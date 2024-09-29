import React, { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import Store from '../../../Store';
import Cross from '../../../components/cross/Cross';

const Filters = () => {

    const [isOpen, setIsOpen] = useState(false)
    Store.useListener('filter', setIsOpen)

    const closeFilter = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
    }

    useEffect(() => {

        window.addEventListener('mousedown', closeFilter)

        return () => {
            window.removeEventListener('mousedown', closeFilter)
        }

    }, [])

    if (!isOpen) return null

    return (
        <div className={`filters_panel ${isOpen}`} onMouseDown={(e) => e.stopPropagation()}>
            <Cross func={closeFilter}/>
            <div className="filter_block">
                <div className="filter_name">Цвет</div>

                <div className="filter_grid">
                    <div className="color_item active"><span></span>Белый</div>
                    <div className="color_item"><span></span>Серый</div>
                    <div className="color_item"><span></span>Черный</div>
                    <div className="color_item"><span></span>Зеленый</div>
                    <div className="color_item"><span></span>Красный</div>
                </div>
            </div>

            <div className="filter_block">
                <div className="filter_name">Материал</div>

                <div className="filter_grid">
                    <div className="color_item"><span></span>Кожа</div>
                    <div className="color_item"><span></span>Хлопок</div>
                    <div className="color_item"><span></span>Шерсть</div>
                </div>
            </div>

            <div className="filter_block">
                <div className="filter_name">Цена</div>

                <div className="filter_grid">
                    <div className="color_item"><span></span>0 - 2000 руб.</div>
                    <div className="color_item"><span></span>2000 - 5000 руб.</div>
                    <div className="color_item"><span></span>5000 - 10000 руб.</div>
                </div>
            </div>

            <Button mode={'fill'} title={'Очистить'}/>

        </div>
    );
};

export default Filters;
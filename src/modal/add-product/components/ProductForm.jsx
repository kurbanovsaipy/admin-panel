import React from 'react';
import ProductCategory from './ProductCategory';
import Input from '../../../components/input/Input';
import TextArea from '../../../components/input/TextArea';

const ProductForm = ({ closeModal }) => {
    return (
        <div className="product_form">
            <div className="main_cross" onClick={closeModal}></div>

            <h3>Добавить товар</h3>

            <ProductCategory />

            <Input type={'text'} value={''} placeholder={'Название товара'} changeValue={''}/>

            <div className="input_wrapper">
                <TextArea value={''} changeValue={""} placeholder={'Описание'}/>
            </div>

            <div className="flex">
                <div className="checkbox "><span></span><p>Для мужчин</p></div>
                <div className="checkbox "><span></span><p>Для женщин</p></div>
            </div>

            <div className="price_input">
                <h4 className='product__label'>Цена:</h4>
                <input type="text" placeholder='0,00 руб'/>
            </div>

            <div className="price_input">
                <h4 className='product__label'>Скидка:</h4>
                <input type="text" placeholder='0,00 руб'/>
            </div>

            {/* <div className="line"></div> */}

            <h3 className='chapter__title'>Цвет</h3>

            <Input type={'text'} value={''} placeholder={'Название цвета'} changeValue={''}/>

            <h4 className='product__label'>Основной:</h4>

            <div className="main__color"></div>

            <div className="palete">
                <h4 className='product__label'>Оттенки:</h4>

                <div className="palete_list">
                    <div className="palete__item" style={{background: '#1e3583'}}></div>
                    <div className="palete__item" style={{background: '#814e1e'}}></div>
                    <div className="palete__item" style={{background: 'orange'}}></div>

                    <div className="palete__item add"></div>
                </div>
            </div>

        </div>
    );
};

export default ProductForm;
import React from 'react';
import ProductCategory from './ProductCategory';
import Input from '../../../components/input/Input';
import TextArea from '../../../components/input/TextArea';
import Button from '../../../components/button/Button';
import useCreateProduct from '../hooks/useCreateProduct';
import ChechBox from '../../../components/input/ChechBox';
import CardImage from './CardImage';

const ProductForm = ({ closeModal }) => {

    const newProduct = useCreateProduct()

    return (
        <form className="product_form">

            <div className="product_form_header">
                <h3>Добавить товар</h3>

                <div className="main_cross" onClick={closeModal}></div>
            </div>

            <ProductCategory />

            <Input type={'text'} name={'title'} value={newProduct.product.title} placeholder={'Название товара'} changeValue={newProduct.inputProductParams}/>

            <div className="input_wrapper">
                <TextArea name={'description'} value={newProduct.product.description} changeValue={newProduct.inputProductParams} placeholder={'Описание'}/>
            </div>

            <Input name={'material'} type={'text'} value={newProduct.product.material} placeholder={'Материал'} changeValue={newProduct.inputProductParams}/>

            <div className="flex">
                <div 
                    className={`checkbox ${newProduct.product.gender === '1' || newProduct.product.gender === '3' ? 'active' : ''}`} 
                    onMouseDown={() => newProduct.changeCheckBox('1')}
                >
                    <span></span><p>Для мужчин</p>
                </div>
                <div 
                    className={`checkbox ${newProduct.product.gender === '2' || newProduct.product.gender === '3' ? 'active' : ''}`} 
                    onMouseDown={() => newProduct.changeCheckBox('2')}
                >
                    <span></span><p>Для женщин</p>
                </div>
            </div>

            <div className="price_input">
                <h4 className='product__label'>Цена:</h4>
                <input 
                    type="text" 
                    placeholder='0,00 руб'
                    value={newProduct.product.price}
                    onChange={(e) => newProduct.inputProductParams('price', e.target.value)}
                />
            </div>

            <div className="price_input">
                <h4 className='product__label'>Скидка:</h4>
                <input 
                    type="text" 
                    placeholder='0 %'
                    value={newProduct.product.discount}
                    onChange={(e) => newProduct.inputProductParams('discount', e.target.value)}
                />
            </div>

            {/* <div className="line"></div> */}

            <h3 className='chapter__title'>Цвет</h3>

            <div className="main__color"></div>

            {/* <div className="palete">
                <h4 className='product__label'>Оттенки:</h4>

                <div className="palete_list">
                    <div className="palete__item" style={{background: '#1e3583'}}></div>
                    <div className="palete__item" style={{background: '#814e1e'}}></div>
                    <div className="palete__item" style={{background: 'orange'}}></div>

                    <div className="palete__item add"></div>
                </div>
            </div> */}

            {/* <div className="options">
                <div className="checkbox "><span></span><p>Новинка</p></div>

                <div className="checkbox "><span></span><p>Нет в наличии</p></div>
            </div> */}

            <CardImage 
                title={'Фото для карточки ( 3 : 4 )'} 
                callback={newProduct.addCardImage} 
                image={newProduct.cardImage}
                error={newProduct.error.cardImage}
                setError={newProduct.setError}
            />
            
            <div className="input_wrapper">
                <TextArea value={newProduct.product.tags} changeValue={newProduct.inputProductParams} placeholder={'Теги поиска (через запятую)'}/>
            </div>

            <Button callback={(e) => newProduct.createProduct(e)} title={'Добавить'}/>
        </form>
    );
};

export default ProductForm;
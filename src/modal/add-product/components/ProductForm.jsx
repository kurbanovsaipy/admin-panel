import React from 'react';
import ProductCategory from './ProductCategory';
import Input from '../../../components/input/Input';
import TextArea from '../../../components/input/TextArea';
import Button from '../../../components/button/Button';

const ProductForm = ({ closeModal }) => {
    return (
        <div className="product_form">

            <div className="product_form_header">
                <h3>Добавить товар</h3>

                <div className="main_cross" onClick={closeModal}></div>
            </div>

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

            <div className="options">
                <div className="checkbox "><span></span><p>Ручная работа</p></div>

                <div className="checkbox "><span></span><p>Новинка</p></div>

                <div className="checkbox "><span></span><p>Нет в наличии</p></div>
            </div>

            <h4 className='product__label'>Фото для карточки ( 3 : 4 )</h4>

            <div className="card_image">
                <svg className='def_image' viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>
                            Created with Pixso.
                    </desc>
                    <defs>
                        <clipPath id="clip2_2">
                            <rect id="default" width="200.000000" height="200.000000" transform="translate(50.000000 100.000000)" fill="white" fill-opacity="0"/>
                        </clipPath>
                        <clipPath id="clip2_1">
                            <rect id="фрейм 1" width="300.000000" height="400.000000" fill="white" fill-opacity="0"/>
                        </clipPath>
                    </defs>
                    <rect id="фрейм 1" width="300.000000" height="400.000000" fill-opacity="1.000000"/>
                    <g clip-path="url(#clip2_1)">
                        <g clip-path="url(#clip2_2)">
                            <path id="path" d="M66.66 154.16C66.66 142.66 75.99 133.33 87.5 133.33L212.5 133.33C224 133.33 233.33 142.66 233.33 154.16L233.33 245.83C233.33 257.33 224 266.66 212.5 266.66L87.5 266.66C75.99 266.66 66.66 257.33 66.66 245.83L66.66 154.16ZM75 154.16L75 245.83C75 252.73 80.59 258.33 87.5 258.33L212.5 258.33C219.4 258.33 225 252.73 225 245.83L225 154.16C225 147.26 219.4 141.66 212.5 141.66L87.5 141.66C80.59 141.66 75 147.26 75 154.16ZM183.33 158.33L200 158.33C204.6 158.33 208.33 162.06 208.33 166.66L208.33 183.33C208.33 187.93 204.6 191.66 200 191.66L183.33 191.66C178.73 191.66 175 187.93 175 183.33L175 166.66C175 162.06 178.73 158.33 183.33 158.33ZM183.33 166.66L183.33 183.33L200 183.33L200 166.66L183.33 166.66ZM73.77 232.11C72.15 233.74 69.51 233.74 67.88 232.11C66.25 230.48 66.25 227.84 67.88 226.22L109.55 184.55C111.18 182.92 113.81 182.92 115.44 184.55L162.5 231.6L184.55 209.55C186.18 207.92 188.81 207.92 190.44 209.55L227.94 247.05C229.57 248.68 229.57 251.31 227.94 252.94C226.31 254.57 223.68 254.57 222.05 252.94L187.5 218.39L165.44 240.44C163.81 242.07 161.18 242.07 159.55 240.44L112.5 193.39L73.77 232.11Z" fill="#1E1F24" fill-opacity="1.000000" fill-rule="nonzero"/>
                        </g>
                    </g>
                </svg>

                <div className="file_input">
                    <label htmlFor="input_file">
                        <input id='input_file' type="file" />
                        <div className='file_button'></div>
                    </label>
                </div>
            </div>

            
            <div className="input_wrapper">
                <TextArea value={''} changeValue={""} placeholder={'Теги поиска'}/>
            </div>

            <Button title={'Добавить'}/>
        </div>
    );
};

export default ProductForm;
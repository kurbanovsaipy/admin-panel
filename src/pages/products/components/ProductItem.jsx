import React from 'react';

const ProductItem = ({image}) => {
    return (
        <div className="product_item">

            <div className="image">
                <img src={image} alt="" />

                <div className="labels">

                    <div className="label_item">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                            <g className="icon"> <path d="M12.2424 20H17.5758M4.48485 16.5L15.8242 5.25607C16.5395 4.54674 17.6798 4.5061 18.4438 5.16268V5.16268C19.2877 5.8879 19.3462 7.17421 18.5716 7.97301L7.39394 19.5L4 20L4.48485 16.5Z" strokeLinecap="round" strokeLinejoin="round"/> </g>

                        </svg>
                    </div>

                    <div className="label_item">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                            <g className='icon'> <path d="M20.5001 6H3.5" strokeWidth="1.5" strokeLinecap="round"/> <path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" strokeWidth="1.5" strokeLinecap="round"/> <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" strokeWidth="1.5" strokeLinecap="round"/> </g>

                        </svg>
                    </div>

                </div>

            </div>

            <div className="info">
                <div href='' className="title">Сумка Teri</div>
                <div className="price">5000 руб.</div>
            </div>

        </div>
    );
};

export default ProductItem;
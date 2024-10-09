import React from 'react';

const ThumbSlide = ({el, slideNum, callback}) => {
    return (
        <div className={`thumb__slide ${slideNum === el.id ? 'active' : ''}`} key={el.id} onClick={() => callback(el.id)}>
            <img src={el.image} alt="" />
        </div>
    );
};

export default ThumbSlide;
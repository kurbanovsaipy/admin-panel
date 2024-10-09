import React from 'react';

const Slide = ({el, slideNum}) => {
    return (
        <div className={`slider__slide ${slideNum === el.id ? 'active' : ''}`} key={el.id}>
            <img className='' src={el.image} alt="" />
        </div>
    );
};

export default Slide;
import React from 'react';

const Slide = ({i, el, slideNum}) => {
    return (
        <div className={`slider__slide ${slideNum === i ? 'active' : ''}`}>
            <img className='' src={el} alt="" />
        </div>
    );
};

export default Slide;
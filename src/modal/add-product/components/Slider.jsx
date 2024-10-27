import React, { useState } from 'react';
import useSlider from '../hooks/useSlider';
import Arrow from './Arrow';
import Slide from './Slide';
import ThumbSlide from './ThumbSlide';
import Plug from './Plug';

const Slider = () => {

    const slider = useSlider()

    return (
        <div className="slider_container nocopy">
            <div className="main_slider" ref={slider.mainSlider}>
                {slider?.slideList?.length ?
                    <>
                        {slider.slideList.map((el, i) => (
                            <Slide i={i} key={i} el={el} slideNum={slider.slideNum}/>
                        ))}

                        {slider.slideList.length > 1 && 
                            <>
                                <Arrow mode={'prev'} callback={slider.prevSlide}/>
                                <Arrow mode={'next'} callback={slider.nextSlide}/>
                            </>
                        }
                    </>
                :
                   <Plug addNewImage={slider.addNewImage}/>
                }
            </div>

            <div className="thumb_slider" ref={slider.thumbSlider}>
                <div className="thimb__slider__track" ref={slider.thumbSliderTrack} style={{transform: `translateX(${0 - (slider.thumbSliderScroll)}px)`}}>
                    {slider?.slideList?.length ?
                        <>
                            {slider.slideList.map((el, i) => (
                                <ThumbSlide 
                                    i={i}
                                    key={i} 
                                    el={el} 
                                    slideNum={slider.slideNum} 
                                    callback={slider.changeSlideNum}
                                    deleteSlide={slider.deleteSlide}
                                />
                            ))}
                        </>
                    :
                        <></>
                    }

                    <label className="add_image" htmlFor='thumb_slider__add'>
                        <div className="main_cross"></div>
                        <input type="file" multiple={'multiple'} id='thumb_slider__add' onChange={slider.addNewImage}/>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Slider;
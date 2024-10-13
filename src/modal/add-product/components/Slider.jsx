import React, { useState } from 'react';
import useSlider from '../hooks/useSlider';
import Arrow from './Arrow';
import Slide from './Slide';
import ThumbSlide from './ThumbSlide';
import Plug from './Plug';

const Slider = () => {
    const [imagePrev, setImagePrev] = useState(false)

    const slider = useSlider()

    const previewImg = (e) => {
        setImagePrev(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="slider_container nocopy">
            <div className="main_slider" ref={slider.mainSlider}>
                {slider?.slideList?.length ?
                    <>
                        {slider.slideList.map(el => (
                            <Slide el={el} slideNum={slider.slideNum}/>
                        ))}

                        {slider.slideList.length > 1 && 
                            <>
                                <Arrow mode={'prev'} callback={slider.prevSlide}/>
                                <Arrow mode={'next'} callback={slider.nextSlide}/>
                            </>
                        }
                    </>
                :
                   <Plug />
                }
            </div>

            <div className="thumb_slider" ref={slider.thumbSlider}>
                <div className="thimb__slider__track" ref={slider.thumbSliderTrack} style={{transform: `translateX(${0 - (slider.thumbSliderScroll)}px)`}}>
                    {slider?.slideList?.length ?
                        <>
                            {slider.slideList.map(el => (
                                <ThumbSlide el={el} slideNum={slider.slideNum} callback={slider.changeSlideNum}/>
                            ))}
                        </>
                    :
                        <></>
                    }

                    <div className="add_image">
                        <div className="main_cross"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;
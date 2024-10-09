import { useRef, useState } from "react"
import image1 from './../images/i.webp';
import image2 from './../images/wallets.jpg'

export default function useSlider () {
    const mainSlider = useRef(null)
    const thumbSlider = useRef(null)
    const [slideNum, setSlideNum] = useState(1)
    const slideList = [
        {
            id: 1,
            image: image1, 
        },
        {
            id: 2,
            image: image2,
        },
        {
            id: 3,
            image: image1, 
        },
        {
            id: 4,
            image: image2,
        },
        {
            id: 5,
            image: image1, 
        },
        {
            id: 6,
            image: image2,
        },
    ]

    const nextSlide = () => {
        if(slideNum >= slideList.length) {
            setSlideNum(1)
        } else {
            setSlideNum(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if(slideNum <= 1) {
            setSlideNum(slideList.length)
        } else {
            setSlideNum(prev => prev - 1)
        }
    }

    const changeSlideNum = (num) => {
        setSlideNum(num)
    }

    return {mainSlider, slideList, slideNum, changeSlideNum, nextSlide, prevSlide}
}
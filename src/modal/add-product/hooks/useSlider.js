import { useEffect, useRef, useState } from "react"
import image1 from './../images/i.webp';
import image2 from './../images/wallets.jpg'

export default function useSlider () {
    const mainSlider = useRef(null)
    const thumbSlider = useRef(null)
    const thumbSliderTrack = useRef(null)
    const [isDrag, setIsDrag] = useState(false)
    const [thumbSliderScroll, setThumbSliderScroll] = useState(0)
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
        {
            id: 7,
            image: image1, 
        }
    ]

    const nextSlide = () => {
        
        if(slideNum >= slideList.length) {
            setSlideNum(1)
            setThumbSliderScroll(0)
        } else {
            setSlideNum(prev => {
                const num = prev + 1
                const sliderWidth = thumbSlider.current.offsetWidth
                const trackWidth = thumbSliderTrack.current.offsetWidth

                if(trackWidth > sliderWidth) {
                    let distance = slideDistance(num)
    
                    if(distance > (sliderWidth / 2)) {
                        let scrollLimit = trackWidth - sliderWidth
                        let scroll = distance - (sliderWidth / 2)
    
                        setThumbSliderScroll(prev => prev + scroll > scrollLimit ? scrollLimit : prev + scroll)
                    }
                }

                return num
            })
        }
    }

    const prevSlide = () => {

        if(slideNum <= 1) {
            setSlideNum(slideList.length)
            setThumbSliderScroll(thumbSliderTrack.current.offsetWidth > thumbSlider.current.offsetWidth ?
                thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth : 0)
        } else {
            setSlideNum(prev => {
                const num = prev - 1
                const sliderWidth = thumbSlider.current.offsetWidth
                const trackWidth = thumbSliderTrack.current.offsetWidth

                if(trackWidth > sliderWidth) {
                    let distance = slideDistance(num)
    
                    if(distance < (sliderWidth / 2)) {
                        let scroll = (sliderWidth / 2) - distance
    
                        setThumbSliderScroll(prev => prev - scroll <= 0 ? 0 : prev - scroll)
                    }
                }

                return num
            })
        }
    }

    const changeSlideNum = (num) => {
        setSlideNum(num)
    }

    const slideDistance = (num) => {
        let allSlides = Array.from(document.getElementsByClassName('thumb__slide'));
        return (allSlides[num - 1].offsetLeft + (allSlides[num - 1].offsetWidth / 2)) - thumbSliderScroll
    }

    useEffect(() => {

        if(window.innerWidth > 991) {
            thumbSlider.current.addEventListener('mousedown', dragStart, {passive: false})
            window.addEventListener('mousemove', draging, {passive: false})
            window.addEventListener('mouseup', stopDrag, {passive: false})    
        } else if (window.innerWidth < 991) {
            thumbSlider.current.addEventListener('touchstart ', dragStart, {passive: false})
            window.addEventListener('touchmove', draging, {passive: false})
            window.addEventListener('touchend ', stopDrag, {passive: false})
        }

        return () => {
            thumbSlider.current.removeEventListener('mousedown', dragStart)
            window.removeEventListener('mousemove', draging)
            window.removeEventListener('mouseup', stopDrag)
        }
        
    }, [isDrag, thumbSliderScroll])

    const dragStart = (e) => {
        e.preventDefault()

        const sliderWidth = thumbSlider.current.offsetWidth
        const trackWidth = thumbSliderTrack.current.offsetWidth

        if(trackWidth > sliderWidth) {
            setIsDrag(true)
            return
        } else {
            return
        }
    }

    const draging = (e) => {
        e.preventDefault()
        
        if(isDrag) {
            let move = e.movementX * 0.7

            if(move > 0) {
                setThumbSliderScroll(prev => {
                    const scroll = prev - move

                    return scroll < 0 ? prev - move * 0.08 : scroll
                })
            } else if (move < 0) {
                setThumbSliderScroll(prev => {
                    const scroll = prev - move
                    let scrollLimit = thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth

                    return scroll > scrollLimit ? prev - move * 0.08 : scroll
                })
            }
        }
    }

    const stopDrag = (e) => {
        e.preventDefault()

        if(thumbSliderScroll < 0) {
            setThumbSliderScroll(0)
        }
        if(thumbSliderScroll > (thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth)) {
            setThumbSliderScroll(thumbSliderTrack.current.offsetWidth - thumbSlider.current.offsetWidth)
        }
        setIsDrag(false)
    }

    return {mainSlider, thumbSlider, thumbSliderTrack, slideList, slideNum, thumbSliderScroll, changeSlideNum, nextSlide, prevSlide}
}
import { useEffect, useState } from "react"


export default function useUser() {

    const [isOpen, setIsOpen] = useState('')

    const closeMenu = () => {
        setIsOpen('')
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        if(isOpen === 'active') {
            setIsOpen('')
        } else {
            setIsOpen('active')
        }
    }

    useEffect(() => {

        window.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }

    }, [])

    return { toggleMenu, closeMenu, isOpen }

}
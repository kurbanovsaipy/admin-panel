import { useCallback, useEffect, useRef, useState } from "react"
import Store from "../../../Store"

export default function useAddProduct () {
    const [isOpen, setIsOpen] = useState(false)
    const productModal = useRef(null)
    const timer = useRef(null)

    Store.useListener('open_add_product_modal', setIsOpen)

    const closeModal = () => {
        productModal.current.style.animation = 'CloseOrder 0.5s forwards'

        timer.current = setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }

    const onKey = (e) => {
        if(e.key === 'Escape' && isOpen) closeModal();
        return
    }

    useEffect(() => {
        document.addEventListener('keydown', onKey); 

        return () => {
            document.removeEventListener('keydown', onKey); 

            if(timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [isOpen])

    return {isOpen, closeModal, productModal}
}
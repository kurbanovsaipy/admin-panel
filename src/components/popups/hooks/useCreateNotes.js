import { useEffect, useRef, useState } from "react"
import Store from "../../../Store"
import Api from "../../../Api"


export default function useCreateNotes() {

    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState({
        title: '',
        description: '',
        image: undefined
    })
    const [imagePreview, setImagePreview] = useState(false)
    const timer = useRef(null)
    Store.useListener('notes', (data) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }
        setIsOpen(data)
    })


    const changeValue = (type, value) => {
        setInput(prev => ({...prev, [type]: value}))
    }

    const closePopUp = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
        setImagePreview(false)
        setInput({title: '', description: '', image: undefined})
        timer.current = setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }

    const previewImg = (e) => {
        console.log('hi')
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setInput(prev => ({...prev, image: e.target.files[0]}))
    }

    const createNotes = async (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('title', input.title)
        data.append('description', input.description)
        data.append('image', input.image)

        let res = await Api.postFormData('api/notes/create', data)

        if(res === 'error') {
            return 
        }

        if(res?.success) {
            setInput({
                title: '',
                description: '',
                image: undefined
            })
            setImagePreview(false)
            Store.setListener('addNotes', res?.data)
            //setIsOpen(false)
        } else {
            return
        }
    }

    useEffect(() => {

        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }

    }, [])
    
    return { closePopUp, imagePreview, isOpen, previewImg, changeValue, createNotes, input }
}
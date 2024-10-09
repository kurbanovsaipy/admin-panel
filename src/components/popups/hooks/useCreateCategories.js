import { useEffect, useRef, useState } from "react"
import Store from "../../../Store"
import Api from "../../../Api"


export default function useCreateCategories() {

    const [isOpen, setIsOpen] = useState(false)
    const [imagePreview, setImagePreview] = useState(false)
    Store.useListener('categoriesPopUp', (data) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }
        setIsOpen(data)
    })

    const [input, setInput] = useState({
        categories_plural: '',
        categories: '',
        image: undefined
    })

    const [forMen, setMen] = useState(false)
    const [forWomen, setWomen] = useState(false)

    const timer = useRef(null)

    const createCategories = async (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('categories_plural', input.categories_plural)
        data.append('categories', input.categories)
        data.append('for_men', forMen)
        data.append('for_women', forWomen)
        data.append('image', input.image)

        let res = await Api.postFormData('api/categories/create', data)
        if(res === 'error') {
            return 
        }

        if(res?.success) {
            setInput({
                categories_plural: '',
                categories: '',
                image: undefined
            })
            setImagePreview(false)
            setMen(false)
            setWomen(false)
            Store.setListener('addCategory', res?.data)
            //setIsOpen(false)
            console.log(res.message)
        } else {
            console.log(res?.message)
            return
        }
    }

    const changeValue = (type, value) => {
        setInput(prev => ({...prev, [type]: value}))
    }

    const closePopUp = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
        setImagePreview(false)
        setInput({
            categories_plural: '',
            categories: '',
            image: undefined
        })
        setMen(false)
        setWomen(false)
        timer.current = setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }

    const previewImgCat = (e) => {
        console.log(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setInput(prev => ({...prev, image: e.target.files[0]}))
    }

    useEffect(() => {

        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }

    }, [])

    return { isOpen, closePopUp, createCategories, input, changeValue, forMen, forWomen, setMen, setWomen, previewImgCat, imagePreview,  }
}
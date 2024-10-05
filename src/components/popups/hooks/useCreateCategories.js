import { useState } from "react"
import Store from "../../../Store"


export default function useCreateCategories() {

    const [isOpen, setIsOpen] = useState(false)
    const [imagePreview, setImagePreview] = useState(false)
    Store.useListener('categoriesPopUp', setIsOpen)

    const [input, setInput] = useState({
        categories_plural: '',
        categories: '',
        image: false
    })

    const [forMen, setMen] = useState(false)
    const [forWomen, setWomen] = useState(false)

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
                image: false
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
            image: false
        })
        setMen(false)
        setWomen(false)
    }

    const previewImg = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setInput(prev => ({...prev, image: e.target.files[0]}))
    }

    return { isOpen, closePopUp, createCategories, input, changeValue, forMen, forWomen, setMen, setWomen, previewImg, imagePreview,  }
}
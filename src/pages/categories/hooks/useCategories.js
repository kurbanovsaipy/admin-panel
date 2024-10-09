import { useEffect, useState } from "react"
import Store from "../../../Store"
import Api from "../../../Api"


export default function useCategories() {

    const [categoreisList, setCategoriesList] = useState([])
    const [load, setLoad] = useState(false)
    Store.useListener('addCategory', (data) => {
        setCategoriesList(prev => [...prev, data])
    })

    useEffect(() => {

        (async () => {

            let res = await Api.get('api/categories/all')

            if(res !== 'error') {
                setCategoriesList(res)
                setLoad(true)
                return 
            }

        })()

        Store.setListener('title', 'Категории')
    }, [])

    const openUpdateCategoriesPopUp = () => {

    }

    const openCategoriesPopUp = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('categoriesPopUp', 'show')
    }

    const deleteItem = async (id) => {
        
        let res = await Api.delete(`api/categories/delete/${id}`)

        if(res === 'error') {
            return
        } else {
            setCategoriesList(prev => prev.filter(el => el.categoryid !== id))
            return
        }

    }

    return { openCategoriesPopUp, openUpdateCategoriesPopUp, load, categoreisList, deleteItem }
}
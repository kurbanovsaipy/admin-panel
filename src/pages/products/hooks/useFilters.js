import { useEffect, useState } from "react"
import Store from "../../../Store"


export default function useFilters() {
    
    const [sorting, setSorting] = useState('')

    const openSorting = (e) => {
        e.stopPropagation()
        if(sorting === 'active') {
            setSorting('')
        } else {
            setSorting('active')
        }
    }

    const closeSorting = () => {
        setSorting('')
    }

    const openFilter = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('filter', 'open')
    }

    useEffect(() => {
        window.addEventListener('click', closeSorting)

        return () => {
            window.removeEventListener('click', closeSorting)
        }
    }, [])

    return { closeSorting, openFilter, sorting, openSorting }
}
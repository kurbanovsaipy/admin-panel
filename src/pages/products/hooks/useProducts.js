import { useEffect, useState } from "react"
import Store from "../../../Store"
import Api from "../../../Api"


export default function useProducts() {

    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])
    const [order, setOrder] = useState({
        value: 'datetime',
        sort: 'DESC'
    })
    const [filter, setFilter] = useState({
        colors: `('Зеленый', 'Синий')`,
        material: '',
        priceMin: '0',
        priceMax: '100000'
    })

    Store.useListener('add_product', (data) => {
        setList(prev => [...prev, data])
    })

    Store.useListener('getProduct', (data) => {
        setLoad(false)
        setTimeout(() => {
            setOrder(prev => ({...prev, value: data.value, sort: data.sort}))
        }, 1000)
    })

    useEffect(() => {
        (async () => {

            let query = `?order=${order.value}&sort=${order.sort}`

            if(filter.colors) {
                query += `&colors=${filter.colors}`
            }

            if(filter.material) {
                query += `&material=${filter.material}`
            }

            if(filter.priceMin && filter.priceMax) {
                query += `&priceMax=${filter.priceMax}&priceMin=${filter.priceMin}`
            }

            let res = await Api.get(`api/products/all${query}`)

            if(res !== 'error') {
                setList(res)
                setLoad(true)
                return 
            } 

        })()
    }, [order, filter])

    return {
        load,
        list
    }
}
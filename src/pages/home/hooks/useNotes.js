import { useEffect, useState } from "react"
import Api from "../../../Api"
import Store from "../../../Store"


export default function useNotes() {

    const [load, setLoad] = useState(false)
    const [notesList, setNotesList] = useState([])

    useEffect(() => {

        (async () => {

            let res = await Api.get('api/notes/all')

            if(res === 'error') {
                return
            } else {
                setNotesList(res)
                setLoad(true)
                return 
            }

        })()

    }, [])

    const openPopUp = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('notes', 'show')
    }

    const openUpdatePopUp = () => {
        Store.setListener('notes', 'show')
        document.body.style.overflow = 'hidden'
    }

    return { load, notesList, openPopUp, openUpdatePopUp }
}
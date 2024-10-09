import { useCallback, useEffect, useRef, useState } from "react"
import Api from "../../../Api"
import Store from "../../../Store"


export default function useNotes() {

    const [load, setLoad] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [scroll, setScroll] = useState(0)
    Store.useListener('addNotes', (data) => {
        setNotesList(prev => [data, ...prev])
    })

    const wrapper = useRef(null)
    const container = useRef(null)

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

    const wheelFunction = useCallback(
        (e) => {
          e.preventDefault();
          if (container.current) {
            const count = notesList.length;
            const width = container.current.clientWidth;
            let wheelDelta = e.deltaY === 0 ? e.deltaX : e.deltaY;
    
            // Ограничиваем шаг прокрутки
            const wheel = Math.max(Math.min(wheelDelta, 100), -100) * 0.5;
    
            setScroll((prevScroll) => {
              const maxScroll = count * 170 - width;
              const newScroll = prevScroll + wheel;
    
              // Ограничиваем прокрутку в рамках доступных значений
              return Math.max(0, Math.min(newScroll, maxScroll));
            });
          }
        },
        [notesList, container.current]
      );

      useEffect(() => {

        if(wrapper.current) {
            wrapper.current.addEventListener('wheel', wheelFunction, {passive: false}) 

            return () => {
                wrapper.current?.removeEventListener('wheel', wheelFunction)
            }
        }

    }, [wheelFunction])

    const deleteNotes = async (id) => {
        let res = await Api.delete(`api/notes/delete/${id}`)

        if(res === 'error') {
            return
        } else {
            setNotesList(prev => prev.filter(el => el.notesid !== id))
        }
    }

    return { load, notesList, openPopUp, openUpdatePopUp, scroll, container, wrapper, deleteNotes }
}
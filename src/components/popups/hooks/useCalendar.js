import { useEffect, useState } from "react"
import Store from "../../../Store"


export default function useCalendar() {

    const [isOpen, setIsOpen] = useState(false)
    const [month, setMonth] = useState('')
    const [calendarList, setCalendarList] = useState([])
    const days = [
        {day: 'Понедельник', name: 'Пн'}, 
        {day: 'Вторник', name: 'Вт'}, 
        {day: 'Среда', name: 'Ср'}, 
        {day:  'Четверг', name: 'Чт'}, 
        {day: 'Пятница', name: 'Пт'}, 
        {day: 'Суббота', name: 'Сб', weekend: true}, 
        {day: 'Воскресенье', name: 'Вс', weekend: true}]

    Store.useListener('calendar', setIsOpen)

    const closePopUp = () => {
        document.querySelector('html').style.overflow = 'visible'
        setIsOpen('close')
        
        setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }

    useEffect(() => {

        const date = new Date()

    }, [])

    return {isOpen, closePopUp, days, month}
}
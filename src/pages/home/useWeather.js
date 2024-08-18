import { useEffect, useState } from "react";


export default function useWeather() {

    const [day, setDay] = useState(0)
    const [month, setMonth] = useState('')
    const [weekDay, setWeekDay] = useState('')

    const padTo2 = (num) => {
        return num.toString().padStart(2, '0')
    }

    useEffect(() => {

        const date = new Date()
        const week = new Intl.DateTimeFormat('ru', {
            weekday: 'long',
        }).format(date);
        setWeekDay(week)
        const month = new Intl.DateTimeFormat('ru', {
            month: 'long',
        }).format(date);
        setMonth(month)
        setDay(padTo2(date.getDate()))

    }, [])

    return {day, month, weekDay}
}
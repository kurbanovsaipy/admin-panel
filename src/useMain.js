import { useEffect, useState } from "react";


export default function useMain() {

    const [load, setLoad] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setLoad(true)
        }, 3100)

    }, [])

    return { load }
}
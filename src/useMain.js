import { useEffect, useState } from "react";
import useMode from "./utils/useMode";
import Store from "./Store";


export default function useMain() {

    const [load, setLoad] = useState(false)

    const mode = useMode()

    useEffect(() => {
        
        setTimeout(() => {
            setLoad(true)
        }, 3100)

        setTimeout(() => {
            Store.setListener('start_mode', mode)
        }, 3200)

    }, [])

    return { load, mode }
}
import { useEffect, useState } from "react";
import Store from "../Store";

export default function useMode() {

    const [mode, setMode] = useState(localStorage.getItem('Mode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    //Store.useListener('mode', setMode)

    useEffect(() => {
        const handleChange = (event) => {
            localStorage.removeItem('Mode')
            setMode(event.matches ? 'dark' : 'light');
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
        };
    }, []);

    return [mode];
}
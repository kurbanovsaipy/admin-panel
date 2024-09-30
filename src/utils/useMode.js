import { useEffect, useState } from "react";
import Store from "../Store";

export default function useMode() {

    const lightTheme = '--background: #fff'
    const darkTheme = 'background: #131313'

    const [mode, setMode] = useState(localStorage.getItem('Mode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    
    Store.useListener('mode', setMode)

    useEffect(() => {
        if(mode) {
            document.body.style = mode === 'dark' ? darkTheme : lightTheme
        }

        const handleChange = (event) => {
            localStorage.removeItem('Mode')
            Store.setListener('start_mode', event.matches ? 'dark' : 'light')
            setMode(event.matches ? 'dark' : 'light');
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
        };
    }, [mode]);

    return mode;
}
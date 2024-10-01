import { useEffect, useState } from "react";
import Store from "../Store";

export default function useMode() {

    const lightTheme = `
        --main-color: rgb(67 231 26);
        --background: #eeeef1;
        --grey: #f9fafb;
        --blue: #1a78f3;
        --red: #ac0a0a;
        --text-color-light: #131313;
        --text-color-dark: #131313;
        --main-font: "Raleway", sans-serif;
        --done: #7528cc;
        --in-progress: rgb(238, 111, 27);
        --new: #00e6ee;
        --darkening: rgb(255 255 255 / 27%);
    `
    const darkTheme = `
        --main-color: rgb(63, 252, 16);
        --background: #131313;
        --grey: #1e1f24;
        --blue: #1a78f3;
        --red: #ac0a0a;
        --text-color-light: #fff;
        --text-color-dark: #131313;
        --main-font: "Raleway", sans-serif;
        --done: #7528cc;
        --in-progress: rgb(238, 111, 27);
        --new: #00e6ee;
        --darkening: rgba(0, 0, 0, 0.514);
    `

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
import React from 'react';
import './css/button.css'

const Button = ({mode, title, callback, type}) => {
    return <button type={type} className={`main_button ${mode}`} onClick={callback}>{title}</button>
};

export default Button;
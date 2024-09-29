import React from 'react';
import './css/button.css'

const Button = ({mode, title, callback}) => {
    return <button className={`main_button ${mode}`} onClick={callback}>{title}</button>
};

export default Button;
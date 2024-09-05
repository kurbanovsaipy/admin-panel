import React from 'react';
import './css/button.css'

const Button = ({mode, title}) => {
    return <button className={`main_button ${mode}`}>{title}</button>
};

export default Button;
import React from 'react';
import './css/button.css'

const Button = ({mode, title}) => {
    return <div className={`main_button ${mode}`}>{title}</div>
};

export default Button;
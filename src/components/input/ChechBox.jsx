import React from 'react';
import './css/input.css';

const ChechBox = ({title, value, setValue}) => {
    return (
        <div className={`checkbox ${value ? 'active' : ''}`} onMouseDown={() => setValue(prev => !prev)}>
            <span></span>
            <p>{title}</p>
        </div>
    );
};

export default ChechBox;
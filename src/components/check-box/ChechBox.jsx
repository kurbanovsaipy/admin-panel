import React from 'react';
import './css/check-box.css';

const ChechBox = ({title, value, setValue}) => {
    return (
        <div className={`checkbox ${value ? 'active' : ''}`} onMouseDown={() => setValue(title, !value)}>
            <span></span>
            <p>{title}</p>
        </div>
    );
};

export default ChechBox;
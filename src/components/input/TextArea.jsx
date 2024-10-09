import React from 'react';
import './css/input.css'

const TextArea = ({value, changeValue, placeholder, name}) => {
    return <textarea 
                value={value} 
                onChange={(e) => changeValue(name, e.target.value)} 
                name="" 
                className={`main_input area ${value ? 'active' : ''}`} 
                id="" placeholder={placeholder} rows={5}>
            </textarea>
};

export default TextArea;
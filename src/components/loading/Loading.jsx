import React from 'react';
import './css/loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <div className='circle first'></div>
            <div className='circle second'></div>
            <div className='circle third'></div>
        </div>
    );
};

export default Loading;
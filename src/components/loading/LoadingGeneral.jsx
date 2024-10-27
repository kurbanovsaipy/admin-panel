import React from 'react';
import './css/loading.css'

const LoadingGeneral = ({mode}) => {
    return (
        <div className={`loading ${mode}`}>

            Loading...
            
        </div>
    );
};

export default LoadingGeneral;
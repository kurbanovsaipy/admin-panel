import React from 'react';

const Cross = ({func}) => {
    return <div className="main_cross" onMouseDown={func}></div>
};

export default Cross;
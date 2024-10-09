import React from 'react';

const Cross = ({func, mode}) => {
    return <div className={`main_cross ${mode}`} onMouseDown={func}></div>
};

export default Cross;
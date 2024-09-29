import React from 'react';

const DashboardHeader = ({switchPanel}) => {
    return (
        <div className="dashboard_header">
            <h1>Teri Leather</h1>
            <div className="main_icon" onClick={switchPanel}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                    <g className='main_icon_path'> <path d="M9 10L4 15M20 15L12 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </g>

                </svg>
            </div>
        </div>
    );
};

export default DashboardHeader;
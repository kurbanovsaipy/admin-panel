import React, { useState } from 'react';
import './css/dashboard.css'
import { NavLink } from 'react-router-dom';
import BottomPanel from './components/BottomPanel';
import Navigations from './components/Navigations';
import DashboardHeader from './components/DashboardHeader';


const Dashboard = () => {

    const [panel, setPanel] = useState('')

    const switchPanel = () => {
        if(panel === 'hide') {
            setPanel('open')
        } else {
            setPanel('hide')
        }
    }

    return (
        <div className={`dashboard ${panel}`}>

            <div className="dashboard_wrapper">
                <DashboardHeader switchPanel={switchPanel}/>

                <Navigations />

                <BottomPanel />
            </div>
            
        </div>
    );
};

export default Dashboard;
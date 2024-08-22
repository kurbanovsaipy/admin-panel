import React from 'react';
import './css/popups.css';
import useCalendar from './hooks/useCalendar';
import Head from './components/calendar/Head';


const Calendar = () => {

    const calendar = useCalendar()

    if(!calendar.isOpen) return null

    return (
        <div className={`main_popup ${calendar.isOpen === 'show' ? 'show' : calendar.isOpen === 'close' ? 'close' : ''}`} onMouseDown={calendar.closePopUp}>
            <div className="calendar" onMouseDown={(e) => e.stopPropagation()}>

                <Head />

                <div className="calendar_grid">
                    {calendar.days.map((el, i) => (
                        <div className={`day ${el.weekend ? 'weekend' : ''}`}key={i}>
                            <p className="main">
                                {el.day}
                            </p>
                            <p className="short">
                                {el.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
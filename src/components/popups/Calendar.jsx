import React from 'react';
import './css/popups.css';
import useCalendar from './hooks/useCalendar';
import Head from './components/calendar/Head';
import Loading from '../loading/Loading';


const Calendar = () => {

    const calendar = useCalendar()

    return (
        <div className={`main_popup ${calendar.isOpen === 'show' ? 'show' : calendar.isOpen === 'close' ? 'close' : ''}`} onMouseDown={calendar.closePopUp}>
            <div className="calendar" onMouseDown={(e) => e.stopPropagation()}>

                <Head titleRef={calendar.titleRef} year={calendar.date.year} months={calendar.months} month={calendar.date.month} prevMonth={calendar.prevMonth} nextMonth={calendar.nextMonth}/>

                <div className="calendar_grid" ref={calendar.calendarRef}>

                    {calendar.days.map((el, i) => (
                        <div className={`day ${el.weekend ? 'weekend' : ''}`}key={i}>
                            <p className="main">{el.day}</p>
                            <p className="short">{el.name}</p>
                        </div>
                    ))}
                    
                    {calendar.calendarList.map((el, i) => (
                        <div key={i}>
                            {el === 0 ? <div className={`plug`}><span></span></div>
                            :<div className={`calendar_item ${calendar.date.currentDay === el && calendar.date.month === calendar.date.currentMonth && calendar.date.year == calendar.date.currentYear ? 'active' : ''}`}>
                                <p>{el}</p>
                            </div>}
                        </div>
                    ))}

                </div>

                <div className="calendar_load">Загрузка...</div>

            </div>
        </div>
    );
};

export default Calendar;
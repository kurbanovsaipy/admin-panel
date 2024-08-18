import React from 'react';
import tower from './../images/tower.jpeg';
import useWeather from '../useWeather';

const Weather = () => {

    const {day, month, weekDay} = useWeather()

    return (
        <div className="weather card">
            <img src={tower} alt="" />
            <div className="content">
                <h3 className="date">{day} {month}</h3>
                <p className="day">{weekDay}</p>
            </div>
        </div>
    );
};

export default Weather;
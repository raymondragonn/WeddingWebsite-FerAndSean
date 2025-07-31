import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
const { useState, useEffect } = React;

const TimeCountDown = (props) => {
  const { t } = useLanguage();
  const [countdownDate] = useState(new Date('04/18/2026').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
    return () => clearInterval();
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // Asegurar que los números sean siempre strings con formato consistente
      days = days.toString();
      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');

      setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    }
  };

  return (
    <div className="react-countdown">
      <div className='time-section'>
        <div className='time'>{state.days}</div>
        <small className="time-text">{t('days')}</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.hours}</div>
        <small className="time-text">{t('hours')}</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.minutes}</div>
        <small className="time-text">{t('minutes')}</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.seconds}</div>
        <small className="time-text">{t('seconds')}</small>
      </div>
    </div>
  );
};

export default TimeCountDown;


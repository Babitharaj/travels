import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: minutes,
    seconds: seconds
  });

  useEffect(() => {
    const timer =
      timeLeft.seconds > 0 && setInterval(() => setTimeLeft({ minutes: timeLeft.minutes, seconds: timeLeft.seconds - 1 }), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      {timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <div>Time's up!</div>
      ) : (
        <div>
          <span>{formatTime(timeLeft.minutes)}</span>:
          <span>{formatTime(timeLeft.seconds)}</span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;

import { useState, useEffect } from "react";
import "./CountdownTimer.jsx";  // Import the CountdownTimer component

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-20T00:00:00"); // Set your birthday date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="heading">MY BIRTHDAY COUNTDOWN</h1>
        <div className="timer">
          <span>
            {timeLeft.days}
            <p>Days</p>
          </span>
          <span>
            {timeLeft.hours}
            <p>Hours</p>
          </span>
          <span>
            {timeLeft.minutes}
            <p>Mins</p>
          </span>
          <span>
            {timeLeft.seconds}
            <p>Secs</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;

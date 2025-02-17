
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
    <div>
      <div className="container">
      <h1 className="heading">Countdown to My BIRTHDAY</h1>
      <div className="timer">
        <div className="box">
          <span>{timeLeft.days}</span> <br /> Days
        </div>
        <div className="box">
          <span>{timeLeft.hours}</span> <br /> Hours
        </div>
        <div className="box">
          <span>{timeLeft.minutes}</span> <br /> Mins
        </div>
        <div className="box">
          <span>{timeLeft.seconds}</span> <br /> Sec
        </div>
      </div>
    </div>
    </div>
  );
}

export default CountdownTimer;

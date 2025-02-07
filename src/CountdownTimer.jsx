
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date(new Date().getFullYear(), 1, 21, 0, 0, 0); // 21st Feb 00:00 HRS
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const styles = {
    container: {
      textAlign: "center",
      backgroundImage: `url("pic.jpg")`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      overflow: "hidden",
      transform: "scale(1)",
      transition: "transform 0.3s ease-in-out",

    },
    heading: {
      fontSize: "3rem",
      color: "white",
      fontWeight: "bold",
    },
    timer: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      fontSize: "2rem",

    },
    box: {
      backgroundColor: "blue",
      color: "white",
      fontSize: "2rem",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      minWidth: "120px",
      fontWeight: "bold",
      cursor: "pointer",
      transform: "scale(1)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },


  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Countdown to My BIRTHDAY</h1>
      <div style={styles.timer}>
        <div style={styles.box}><span>{timeLeft.days}</span><p>Days</p></div>
        <div style={styles.box}><span>{timeLeft.hours}</span><p>Hours</p></div>
        <div style={styles.box}><span>{timeLeft.minutes}</span><p>Mins</p></div>
        <div style={styles.box}><span>{timeLeft.seconds}</span><p>Sec</p></div>
      </div>
    </div>
  );
};

export default CountdownTimer;

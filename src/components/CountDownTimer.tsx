import { useState, useEffect } from "react";
import { unicaOne } from "@/utils/fonts/fonts";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface countDown {
  targetDate: any;
}
const CountDownTimer = ({ targetDate }: countDown) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="hero__content--timer">
      <span className={unicaOne.className}>
        {timeLeft.days}
        <sub className={montserrat.className}>D</sub>
      </span>
      <span className={unicaOne.className}>
        {timeLeft.hours}
        <sub className={montserrat.className}>H</sub>
      </span>
      <span className={unicaOne.className}>
        {timeLeft.minutes}
        <sub className={montserrat.className}>M</sub>
      </span>
      <span className={unicaOne.className}>
        {timeLeft.seconds}
        <sub className={montserrat.className}>S</sub>
      </span>
    </div>
  );
};

export default CountDownTimer;

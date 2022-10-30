import "./Counter.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const Counter = () => {
  const [duration, setDuration] = useState(600);

  const children = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;


    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }


    return (
      <div className="timer-info">
        <span className="timer-info__remaining">{`${minutes}:${seconds}`}</span>
        <span className="timer-info__status">PAUSE</span>
      </div>
    );
  }

  return (
    <div className="timer-wrapper">
      <div className="timer-wrapper__inner">
        <CountdownCircleTimer
          isPlaying
          size={350}
          colors='red'
          trailStrokeWidth={25}
          trailColor='#161932'
          strokeLinecap='round'
          rotation='counterclockwise'
          duration={duration}
          children={children}
        >
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default Counter
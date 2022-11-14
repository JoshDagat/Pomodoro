import "./Counter.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Counter = ({
  duration,
  initialRemainingTime,
  isPlaying,
  setIsPlaying,
  countdownType,
  setCountdownType,
  pomodoroCount,
  setPomodoroCount,
  key,
  setKey,
  appUI
}) => {
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
        <span
          className="timer-info__status"
          onClick={() => setIsPlaying(prevStatus => !prevStatus)}
        >
          {(isPlaying) ? 'PAUSE' : 'PLAY'}
        </span>
      </div>
    );
  }

  return (
    <div className="timer-wrapper">
      <div className="timer-wrapper__inner">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          size={350}
          colors={appUI.color}
          trailStrokeWidth={25}
          trailColor='#161932'
          strokeLinecap='round'
          rotation='counterclockwise'
          duration={duration}
          initialRemainingTime={initialRemainingTime}
          children={children}
          key={key}

          onComplete={
            () => {
              if (countdownType === 'pomodoro' && pomodoroCount === 4) {
                setCountdownType('long break');
                setPomodoroCount(1);
              }
              else if (countdownType === 'pomodoro' && pomodoroCount < 4) {
                setCountdownType('short break');
                setPomodoroCount(prev => prev + 1);
              }

              else {
                setCountdownType('pomodoro');
              }
              setKey(prevKey => prevKey[0] + (prevKey.slice(1) + 1))
              setIsPlaying(false)
            }
          }
        >
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default Counter
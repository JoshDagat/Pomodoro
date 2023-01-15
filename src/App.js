import { useState, useEffect } from 'react';
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";
import SettingsModal from './Components/SettingsModal/SettingsModal';
import "./Assets/styles/global.scss";
import "./App.scss";



const App = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [countdownType, setCountdownType] = useState('pomodoro');
  const [pomodoroCount, setPomodoroCount] = useState(1);
  const [counterSize, setCounterSize] = useState(410);
  const [width] = useWindowSize();

  const [timerKey, setTimerKey] = useState('a0');

  const [settings, setSettings] = useState({
    color: '#F87070',
    font: 'Kumbh Sans'
  })

  const [appUI, setAppUI] = useState({
    color: '#F87070',
    font: 'Kumbh Sans'
  })

  let duration, initialRemainingTime;

  if (countdownType === 'pomodoro') {
    duration = pomodoro * 60;
    initialRemainingTime = pomodoro * 60;
  } else if (countdownType === 'short break') {
    duration = shortBreak * 60;
    initialRemainingTime = shortBreak * 60;
  } else {
    duration = longBreak * 60;
    initialRemainingTime = longBreak * 60;
  }


  // document.getElementById("root").style.fontFamily = appUI.font;

  useEffect(() => {
    document.getElementById("root").style.fontFamily = appUI.font;
  }, [appUI.font]);

  function useWindowSize() {
    const [size, setSize] = useState(0);
    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth)
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, [])

    return [size];
  }

  useEffect(() => {
    if (width >= 768) {
      setCounterSize(410)
    } else {
      setCounterSize(300)
    }
  }, [width])

  return (
    <>
      <h2>pomodoro</h2>
      <Nav
        countdownType={countdownType}
        appUI={appUI}
      />
      <Counter
        appUI={appUI}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        countdownType={countdownType}
        setCountdownType={setCountdownType}
        pomodoroCount={pomodoroCount}
        setPomodoroCount={setPomodoroCount}
        duration={duration}
        initialRemainingTime={initialRemainingTime}
        key={timerKey}
        setKey={setTimerKey}
        size={counterSize}
        onUpdate={() => {
          console.log('test')
        }}
      />
      <Settings
        setIsOpenSettings={setIsOpenSettings}
      />
      <SettingsModal
        isOpenSettings={isOpenSettings}
        setIsOpenSettings={setIsOpenSettings}
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        shortBreak={shortBreak}
        setShortBreak={setShortBreak}
        longBreak={longBreak}
        setLongBreak={setLongBreak}
        settings={settings}
        setSettings={setSettings}
        appUI={appUI}
        setAppUI={setAppUI}
      />
    </>
  )
}

export default App
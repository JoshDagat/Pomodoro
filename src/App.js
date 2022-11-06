import { useState } from 'react';
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
  } else if (countdownType === 'shortBreak') {
    duration = shortBreak * 60;
    initialRemainingTime = shortBreak * 60;
  } else {
    duration = longBreak * 60;
    initialRemainingTime = longBreak * 60;
  }


  document.getElementById("root").style.fontFamily = appUI.font;

  return (
    <>
      <h2>pomodoro</h2>
      <Nav
        countdownType={countdownType}
        appUI={appUI}
      />
      <Counter
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
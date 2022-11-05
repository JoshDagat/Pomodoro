import { useState } from 'react';
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";
import SettingsModal from './Components/SettingsModal/SettingsModal';
import "./Assets/styles/global.scss";
import "./App.scss";



const App = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const [settings, setSettings] = useState({
    color: '#F87070',
    font: 'Kumbh Sans'
  })

  const [appUI, setAppUI] = useState({
    color: '#F87070',
    font: 'Kumbh Sans'
  })

  document.getElementById("root").style.fontFamily = appUI.font;

  return (
    <>
      <h2>pomodoro</h2>
      <Nav />
      <Counter />
      <Settings
        setIsOpenSettings={setIsOpenSettings}
      />
      <SettingsModal
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
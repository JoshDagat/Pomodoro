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
  const [font, setFont] = useState("Kumbh Sans");
  const [color, setColor] = useState("#F87070");

  document.getElementById("root").style.fontFamily = font;

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
        font={font}
        setFont={setFont}
        color={color}
        setColor={setColor}
      />
    </>
  )
}

export default App
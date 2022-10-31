import { useState } from 'react';
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";
import "./Assets/styles/global.scss";
import "./App.scss";



const App = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  return (
    <>
      <h2>pomodoro</h2>
      <Nav />
      <Counter />
      <Settings
        setIsOpenSettings={setIsOpenSettings}
      />
    </>
  )
}

export default App
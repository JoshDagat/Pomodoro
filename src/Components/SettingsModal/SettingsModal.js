import './SettingsModal.scss';
import close from "../../Assets/images/icon-close.svg"
import TimeSettings from './TimeSettings/TimeSettings';
import FontSettings from './FontSettings/FontSettings';
import ColorSettings from './ColorSettings/ColorSettings';
import blobAudio from "./../../Assets/Audio/blob.wav"


const SettingsModal = ({
  pomodoro, setPomodoro,
  shortBreak, setShortBreak,
  longBreak, setLongBreak,
  settings, setSettings,
  appUI, setAppUI,
  isOpenSettings, setIsOpenSettings
}) => {

  const timeValues = [
    {
      name: 'pomodoro',
      time: pomodoro,
      setTime: setPomodoro
    },
    {
      name: 'short break',
      time: shortBreak,
      setTime: setShortBreak
    },
    {
      name: 'long break',
      time: longBreak,
      setTime: setLongBreak
    }
  ]

  return (
    <div className={`settings-modal__wrapper ${(isOpenSettings) ? 'active' : ''}`}>
      <div className='settings-modal'>
        <div className="settings-header">
          <span>Settings</span>
          <img
            src={close}
            alt="Close"
            onClick={() => setIsOpenSettings(prev => !prev)}
          />
        </div>
        <div className="settings-body">
          <TimeSettings
            values={timeValues}
          />
          <FontSettings
            values={['Kumbh Sans', 'Roboto Slab', 'Space Mono']}
            settings={settings}
            setSettings={setSettings}
          />
          <ColorSettings
            values={['#F87070', '#70F3F8', '#D881F8']}
            settings={settings}
            setSettings={setSettings}
          />
        </div>
        <button
          className='apply'
          style={{ backgroundColor: appUI.color }}
          onClick={
            () => {
              setAppUI({ font: settings.font, color: settings.color })
              setIsOpenSettings(prevIsOpenSettings => !prevIsOpenSettings)
              new Audio(blobAudio).play();
            }}
        >Apply</button>
      </div>
    </div>
  )
}

export default SettingsModal
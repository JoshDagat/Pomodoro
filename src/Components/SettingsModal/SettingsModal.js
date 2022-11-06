import './SettingsModal.scss';
import close from "../../Assets/images/icon-close.svg"
import TimeInput from './TimeInput/TimeInput';
import FontInput from './FontInput/FontInput';
import ColorInput from './ColorInput/ColorInput';

const SettingsModal = ({
  pomodoro, setPomodoro,
  shortBreak, setShortBreak,
  longBreak, setLongBreak,
  settings, setSettings,
  appUI, setAppUI,
  isOpenSettings, setIsOpenSettings
}) => {
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
          <div className="settings-time">
            <span>Time (minutes)</span>
            <div className="settings-time__inputs">
              <TimeInput name="pomodoro" val={pomodoro} setVal={setPomodoro} />
              <TimeInput name="short-break" val={shortBreak} setVal={setShortBreak} />
              <TimeInput name="long-break" val={longBreak} setVal={setLongBreak} />
            </div>
          </div>
          <div className="settings-font">
            <span>Font</span>
            <div className="settings-font__inputs">
              <FontInput val="Kumbh Sans" settings={settings} setSettings={setSettings} />
              <FontInput val="Roboto Slab" settings={settings} setSettings={setSettings} />
              <FontInput val="Space Mono" settings={settings} setSettings={setSettings} />
            </div>
          </div>
          <div className="settings-color">
            <span>Color</span>
            <div className="settings-color__inputs">
              <ColorInput val={'#F87070'} settings={settings} setSettings={setSettings} />
              <ColorInput val={'#70F3F8'} settings={settings} setSettings={setSettings} />
              <ColorInput val={'#D881F8'} settings={settings} setSettings={setSettings} />
            </div>
          </div>
        </div>
        <button
          className='apply'
          style={{ backgroundColor: appUI.color }}
          onClick={
            () => setAppUI({ font: settings.font, color: settings.color })
          }
        >Apply</button>
      </div>
    </div>
  )
}

export default SettingsModal
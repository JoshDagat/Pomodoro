import './SettingsModal.scss';
import close from "../../Assets/images/icon-close.svg"
import TimeInput from './TimeInput/TimeInput';
import FontInput from './FontInput/FontInput';
import ColorInput from './ColorInput/ColorInput';

const SettingsModal = ({
  pomodoro, setPomodoro,
  shortBreak, setShortBreak,
  longBreak, setLongBreak,
  font, setFont
}) => {
  return (
    <div className='settings-modal'>
      <div className="settings-header">
        <span>Settings</span>
        <img src={close} alt="Close" />
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
            <FontInput font={font} val="Kumbh Sans" setFont={setFont} />
            <FontInput font={font} val="Roboto Slab" setFont={setFont} />
            <FontInput font={font} val="Space Mono" setFont={setFont} />
          </div>
        </div>
        <div className="settings-color">
          <span>Color</span>
          <div className="settings-color__inputs">
            <ColorInput val={'#F87070'} />
            <ColorInput val={'#70F3F8'} />
            <ColorInput val={'#D881F8'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
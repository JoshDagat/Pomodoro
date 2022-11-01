import './SettingsModal.scss';
import close from "../../Assets/images/icon-close.svg"
import TimeInput from './TimeInput/TimeInput';

const SettingsModal = ({
  pomodoro, shortBreak, longBreak,
  setPomodoro, setShortBreak, setLongBreak
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
      </div>
    </div>
  )
}

export default SettingsModal
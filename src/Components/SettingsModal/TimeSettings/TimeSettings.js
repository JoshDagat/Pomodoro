import TimeInput from "./TimeInput/TimeInput";

const TimeSettings = ({ values }) => {
  const timeInputs = values.map(({ setTime, time, name }) => {
    return (
      <TimeInput
        name={name}
        val={time}
        setVal={setTime}
      />
    )
  })

  return (
    <div className="settings-time">
      <span>Time (minutes)</span>
      <div className="settings-time__inputs">
        {timeInputs}
      </div>
    </div>
  )
}

export default TimeSettings
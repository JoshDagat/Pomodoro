import "./ColorInput.scss";

const ColorInput = ({ val, settings, setSettings }) => {
  return (
    <button
      className={`color-input ${settings.color === val ? 'active' : ''}`}
      style={{ backgroundColor: val }}
      onClick={
        () => {
          setSettings(prevSettings => { return { ...prevSettings, color: val } })
        }
      }
    >
      {
        (settings.color === val) && (
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 5.5L4.95263 9.45263L13.4053 1"
              stroke="#161932"
              strokeWidth="2" />
          </svg>
        )
      }
    </button>
  )
}

export default ColorInput
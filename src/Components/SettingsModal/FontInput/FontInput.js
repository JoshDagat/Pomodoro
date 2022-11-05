import "./FontInput.scss";

const FontInput = ({ val, settings, setSettings }) => {
  return (
    <button
      className={`font-input ${(val === settings.font) ? 'active' : ''}`}
      style={{ fontFamily: val }}
      onClick={
        () => setSettings(prevSettings => { return { ...prevSettings, font: val } })
      }
    >
      <span>Aa</span>
    </button>
  )
}

export default FontInput
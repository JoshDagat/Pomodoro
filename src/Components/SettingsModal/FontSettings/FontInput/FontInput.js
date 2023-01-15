import "./FontInput.scss";
import blobAudio from "./../../../../Assets/Audio/blob.wav";


const FontInput = ({ val, settings, setSettings }) => {
  return (
    <button
      className={`font-input ${(val === settings.font) ? 'active' : ''}`}
      style={{ fontFamily: val }}
      onClick={
        () => {
          setSettings(prevSettings => { return { ...prevSettings, font: val } })
          new Audio(blobAudio).play();
        }}
    >
      <span>Aa</span>
    </button>
  )
}

export default FontInput
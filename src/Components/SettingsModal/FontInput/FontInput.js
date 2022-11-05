import "./FontInput.scss";

const FontInput = ({ font, val, setFont }) => {
  return (
    <button
      onClick={() => setFont(val)}
      className={`font-input ${(val === font) ? 'active' : ''}`}
      style={{ fontFamily: val }}
    >
      <span>Aa</span>
    </button>
  )
}

export default FontInput
import "./ColorInput.scss";

const ColorInput = ({ val }) => {
  return (
    <button
      className={`color-input`}
      style={{ backgroundColor: val }}
    >
    </button>
  )
}

export default ColorInput
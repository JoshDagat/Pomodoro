import ColorInput from "./ColorInput/ColorInput"

const ColorSettings = ({ values, settings, setSettings }) => {
  let colorInputs = values.map(color => {
    return (
      <ColorInput
        val={color}
        settings={settings}
        setSettings={setSettings}
      />
    )
  })

  return (
    <div className="settings-color">
      <span>Color</span>
      <div className="settings-color__inputs">
        {colorInputs}
      </div>
    </div>
  )
}

export default ColorSettings
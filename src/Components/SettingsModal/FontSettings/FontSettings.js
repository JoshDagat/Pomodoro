import FontInput from "./FontInput/FontInput"

const FontSettings = ({ values, settings, setSettings }) => {
  const fontInputs = values.map(font => {
    return (
      <FontInput
        val={font}
        settings={settings}
        setSettings={setSettings}
      />
    )
  })

  return (
    <div className="settings-font">
      <span>Font</span>
      <div className="settings-font__inputs">
        {fontInputs}
      </div>
    </div>
  )
}

export default FontSettings
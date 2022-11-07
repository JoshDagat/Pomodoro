const NavButton = ({ name, countdownType, appUI }) => {
  return (
    <button
      className={`nav__button`}
      style={{
        backgroundColor: (name === countdownType) ? appUI.color : 'transparent',
        color: (name === countdownType) ? '#1e213f' : '#eff1fa'
      }}
    >{name}</button>
  )
}

export default NavButton
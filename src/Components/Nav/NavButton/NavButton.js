import "./NavButton.scss"

const NavButton = ({ name, countdownType, appUI }) => {
  return (
    <button
      className={`nav__button`}
      style={{ backgroundColor: (name === countdownType) ? appUI.color : 'transparent' }}
    >{name}</button>
  )
}

export default NavButton
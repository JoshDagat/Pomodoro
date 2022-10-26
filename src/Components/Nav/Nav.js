import "./Nav.scss"

const Nav = () => {
  return (
    <div className="Nav">
      <button id="pomodoro" className="active">pomodoro</button>
      <button id="short_break">short break</button>
      <button id="long_break">longbreak</button>
    </div>
  )
}

export default Nav;
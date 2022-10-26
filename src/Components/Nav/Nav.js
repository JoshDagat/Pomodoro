import "./Nav.scss";
import NavButton from "../NavButton/NavButton";

const Nav = () => {
  return (
    <div className="Nav">
      <NavButton name="pomodoro" id="pomodoro"></NavButton>
      <NavButton name="short break" id="short_break"></NavButton>
      <NavButton name="long break" id="long_break"></NavButton>
    </div>
  )
}

export default Nav;
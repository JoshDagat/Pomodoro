import "./Nav.scss";
import NavButton from "./NavButton/NavButton";

const Nav = ({ countdownType, appUI }) => {
  return (
    <div className="Nav">
      <NavButton name="pomodoro" appUI={appUI} countdownType={countdownType}></NavButton>
      <NavButton name="shortBreak" appUI={appUI} countdownType={countdownType}></NavButton>
      <NavButton name="longBreak" appUI={appUI} countdownType={countdownType}></NavButton>
    </div>
  )
}

export default Nav;
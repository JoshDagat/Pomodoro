import "./Assets/styles/global.scss";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import "./App.scss";

const App = () => {
  return (
    <>
      <h2>pomodoro</h2>
      <Nav></Nav>
      <Counter></Counter>
    </>
  )
}

export default App
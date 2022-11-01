import "./TimeInput.scss";

const TimeInput = ({ name, val, setVal }) => {
  return (
    <div className="time-input">
      <span>{name}</span>
      <div className="time-input__ui">
        <input id={`time-input__${name}`} type="number" min={1} max={60} value={val} />
        <svg
          onClick={() => setVal(prev => prev + 1)}
          className="up-arrow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6l6-4 6 4"
          />
        </svg>
        <svg
          onClick={() => setVal(prev => prev - 1)}
          className="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1l6 4 6-4"
          />
        </svg>
      </div>
    </div>
  )
}

export default TimeInput
import { useState } from 'react'
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
  const [fontSize, setFontSize] = useState(25)

  const decrementCount = () => { 
    if (count > 0) {
      setCount(count - 1)
      setFontSize(fontSize - 2)
    }
  }
  
  const incrementCount = () => { 
    if (count < 10) {
      setCount(count + 1)
      setFontSize(fontSize + 2)
    }
  }
  
  const doubleCount = () => { if (count < 10) setCount(count * 2) }
  const halveCount = () => { setCount(Math.round(count / 2)) }

  return (
    <div className="counter-app-container">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button onClick={decrementCount}>-</button>
        <span style={{fontSize: `${fontSize}px`}}>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div className="extra-features">
        <button onClick={doubleCount}>Double</button>
        <button onClick={halveCount}>Halve</button>
      </div>
    </div>
  );
}

export default App;

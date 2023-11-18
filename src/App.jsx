import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Abhay learning react</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App

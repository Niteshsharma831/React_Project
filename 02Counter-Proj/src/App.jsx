import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  // let counter = 5;
  const addValue = () => {
    setCounter(counter + 1)
    console.log("clicked", counter);
  }

  // Descrease Value
  const decreaseValue = () => {
    setCounter(counter - 1)
    console.log("clicked", counter);
  }

  return (
    <>
       <h1>React Fisrt Day</h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addValue}>Add Value</button>
       <br />
       <button onClick={decreaseValue} >Decrease Value</button>
    </>
  )
}

export default App

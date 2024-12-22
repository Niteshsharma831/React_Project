import './App.css'
import {useState} from 'react'

function Day1() {
    const [counter, setCounter] = useState(0)
    const addValue = () =>{
        if(counter < 20){
            // setCounter(prevCounter=> prevCounter + 1)
            // setCounter(prevCounter=> prevCounter + 1)
            // setCounter(prevCounter=> prevCounter + 1)
            // setCounter(prevCounter=> prevCounter + 1)
            setCounter(counter +1)
        }
        else{
            alert("Counter Value is Maximum")
        }
    }

    const decreaseValue = () => {
        if(counter > 0){
           setCounter(counter - 1)
        }
        else{
            alert("Counter Value is Minimum")
        }
    }

    return(
        <div>
            <h3>This is Counter App</h3>
            <h1>Counter Value: {counter}</h1>
            <button onClick={addValue} style={{backgroundColor: "green", color: "white"}}>Add Value</button>
            <br />
            <br />
            <button onClick={decreaseValue} style={{backgroundColor: "red", color: "white"}}>Decrease Value</button>
        </div>
    )
}
export default Day1
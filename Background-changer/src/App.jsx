import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap gap-3 px-4 py-2 bg-white py- rounded-xl">
          <button onClick={() => setColor("red")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          
          <button onClick={() => setColor("green")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          
          <button onClick={() => setColor("blue")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          
          <button onClick={() => setColor("yellow")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          
          <button onClick={() => setColor("black")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          
          <button onClick={() => setColor("orange")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          
          <button onClick={() => setColor("purple")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          
          <button onClick={() => setColor("white")} className="p-4 px-4 py-1 text-black shadow-lg rounded-ull text-whit" style={{backgroundColor: "white"}}>White</button>
          
          <button onClick={() => setColor("brown")} className="p-4 px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App

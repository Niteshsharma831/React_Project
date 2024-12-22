import './App.css'; 
import MaterialComponents from './components.jsx'; 

function App() {
  return (
    <>
      <h1 className='p-4 text-white bg-green-500 rounded-xl'><span className='text-blue-700'>Day 3 :- </span> <u>Tailwind Tutorial</u></h1>
      <div >
      <MaterialComponents Fname="Nitesh Kumar Sharma" btnTxt = "click me" />
      <MaterialComponents Fname="Sunil Kumar" btnTxt= "visite more" />
      </div>
    </>
  );
}

export default App;

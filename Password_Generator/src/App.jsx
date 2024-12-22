/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // Password Generator
  const passwordGen = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGen();
  }, [length, numberAllowed, charAllowed, passwordGen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  };

  return (
    <>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-white">Password Generator</h1>
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
          />
          <button
            className="px-3 py-0.5 text-white bg-blue-700 outline-none shrink-0"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              id="rangeInput"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="rangeInput">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

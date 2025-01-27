import { useState } from "react";
import "./App.css";
import { InputBox } from "./Components";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      console.error("Invalid conversion rate for currency:", to);
    }
  };

  return (
    <>
      <h1 className="p-1 text-3xl text-white bg-orange-500">
        Currency Converter
      </h1>
      <div className="converter">
        <InputBox
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="currency-select">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
          <button onClick={swap}>Swap</button>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button onClick={convert} className="convert-button">
          Convert
        </button>
        <p>Converted Amount: {convertedAmount.toFixed(2)}</p>
      </div>
    </>
  );
}

export default App;

 import React from 'react';
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions =[],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
    const amountInputId = usdId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
      <div className="w-1/2">
        <label className="inline-block mb-2 text-black/40">{label}</label>
        <input
            id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value= {amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">Currency Type</p>
        <select className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer">
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            currencyDisabled={currencyDisabled}
            {
            currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
            ))
         }
        </select>
      </div>
    </div>
  );
}

export default InputBox;

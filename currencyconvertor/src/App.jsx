import React, { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0);
  const [currency, setcurrency] = useState("usd");
  const [currency1, setcurrency1] = useState("usd");
  const [final, setfinal] = useState(0);
  const idata = useCurrencyInfo(currency);

  useEffect(() => {
    if (idata && currency1 && amount) {
      const x = idata[currency1];
      if (x) {
        const y = x * amount;
        setfinal(y);
      }
    }
  }, [amount, currency, currency1, idata]);

  const handleInputChange = (e) => {
    setamount(e.target.value);
  };
  const handleSelectChange = (e) => {
    setcurrency(e.target.value);
  };
  const handleSelectChange1 = (e) => {
    setcurrency1(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6">💱 Currency Converter</h1>

        <div className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <div className="flex space-x-4">
            <select
              value={currency}
              onChange={handleSelectChange}
              className="flex-1 px-4 py-2 rounded-lg border border-white/40 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>

            <select
              value={currency1}
              onChange={handleSelectChange1}
              className="flex-1 px-4 py-2 rounded-lg border border-white/40 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>
          </div>

          <p className="text-xl text-center font-semibold mt-4">
            Converted Amount: <span className="text-yellow-300">{final.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

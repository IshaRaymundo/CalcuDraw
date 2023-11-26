import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExchangeAlt } from "react-icons/fa"; // Utilizamos FaExchangeAlt en lugar de FaSyncAlt

const Divisas = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("MXN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const apiUrl =
    "https://v6.exchangerate-api.com/v6/4f869e735b29eb080ae7c5aa/latest/";

  useEffect(() => {
    fetch(apiUrl + fromCurrency)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      setConvertedAmount((amount * exchangeRates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, exchangeRates]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleSwapCurrencies = () => {
    // Intercambia los valores de fromCurrency y toCurrency
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <>
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">
          CALCULADORA DE DIVISAS
        </h1>
      </header>
      <div className="bg-neutral-100 flex flex-col h-screen items-center text-center"> {/* Cambiamos min-h-screen a h-screen */}
        <br></br>
        <div className="my-6">
          <label className="text-blue-900 text-2xl my-2 font-bold">IMPORTE:</label>
          <input
            type="number"
            className="form-control form-control-lg"
            value={amount}
            onChange={handleAmountChange}
            style={{ width: "400px" }}
          />
        </div>

        <div className="flex items-center my-4">
          <select
            className="form-select form-select-lg"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <button className="mx-2 bg-white text-gray-500 font-bold border-gray-500 rounded-full p-2" onClick={handleSwapCurrencies}>
            <FaExchangeAlt />
          </button>

          <select
            className="form-select form-select-lg"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3 text-center">
          <h3 className="text-blue-900">
            <span className="text-2xl my-2 font-bold">RESULTADO</span>
            <div className="bg-white rounded p-4 shadow-lg my-2 text-blue-900">
              {convertedAmount} {toCurrency}
            </div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Divisas;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="bg-[#358ed3] min-h-screen items-center text-center">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">
          CALCULADORA DE DIVISAS
        </h1>
      </header>
      <br></br>

      <main className="justify-center">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <h4 className="my-3 text-center text-white ">REALIZAR CONVERSIÓN A: </h4>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
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
      </div>
      </main>
      <div className="mt-3 text-center">
        <h3 className="text-white">
          <span
            className="rounded-circle bg-primary p-2 text-white"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {amount} {fromCurrency}
          </span>
          <span className="mx-2">ES IGUAL A:</span>
          <span
            className="rounded-circle bg-success p-2 text-white"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {convertedAmount} {toCurrency}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Divisas;

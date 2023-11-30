import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const Medidas = () => {
  const [amount, setAmount] = useState(1);
  const [fromUnit, setFromUnit] = useState("centímetros");
  const [toUnit, setToUnit] = useState("metros");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const conversionRates = {
    kilómetros: {
      metros: 1000,
      centímetros: 100000,
      milímetros: 1000000,
      pulgadas: 39370.1,
      pies: 3280.84,
      yardas: 1093.61,
    },
    hectómetros: {
      metros: 100,
      centímetros: 10000,
      milímetros: 100000,
      pulgadas: 3937.01,
      pies: 328.084,
      yardas: 109.361,
    },
    decámetros: {
      metros: 10,
      centímetros: 1000,
      milímetros: 10000,
      pulgadas: 393.701,
      pies: 32.8084,
      yardas: 10.9361,
    },
    metros: {
      kilómetros: 0.001,
      hectómetros: 0.01,
      decámetros: 0.1,
      centímetros: 100,
      milímetros: 1000,
      pulgadas: 39.3701,
      pies: 3.28084,
      yardas: 1.09361,
    },
    decímetros: {
      metros: 0.1,
      centímetros: 10,
      milímetros: 100,
      pulgadas: 3.93701,
      pies: 0.328084,
      yardas: 0.109361,
    },
    centímetros: {
      kilómetros: 0.00001,
      hectómetros: 0.0001,
      decámetros: 0.001,
      metros: 0.01,
      decímetros: 0.1,
      milímetros: 10,
      pulgadas: 0.393701,
      pies: 0.0328084,
      yardas: 0.0109361,
    },
    milímetros: {
      kilómetros: 0.000001,
      hectómetros: 0.00001,
      decámetros: 0.0001,
      metros: 0.001,
      decímetros: 0.01,
      centímetros: 0.1,
      pulgadas: 0.0393701,
      pies: 0.00328084,
      yardas: 0.00109361,
    },
    pulgadas: {
      kilómetros: 0.0000254,
      hectómetros: 0.000254,
      decámetros: 0.00254,
      metros: 0.0254,
      decímetros: 0.254,
      centímetros: 2.54,
      milímetros: 25.4,
      pies: 0.0833333,
      yardas: 0.0277778,
    },
    pies: {
      kilómetros: 0.0003048,
      hectómetros: 0.003048,
      decámetros: 0.03048,
      metros: 0.3048,
      decímetros: 3.048,
      centímetros: 30.48,
      milímetros: 304.8,
      pulgadas: 12,
      yardas: 0.333333,
    },
    yardas: {
      kilómetros: 0.0009144,
      hectómetros: 0.009144,
      decámetros: 0.09144,
      metros: 0.9144,
      decímetros: 9.144,
      centímetros: 91.44,
      milímetros: 914.4,
      pulgadas: 36,
      pies: 3,
    },
  };

  // Función para intercambiar las unidades
  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Función para realizar la conversión
  useEffect(() => {
    if (conversionRates[fromUnit] && conversionRates[fromUnit][toUnit]) {
      setConvertedAmount((amount * conversionRates[fromUnit][toUnit]).toFixed(2));
    }
  }, [amount, fromUnit, toUnit, conversionRates]);

  
  return (
    <>
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">
          CONVERSOR DE MEDIDAS
        </h1>
      </header>
      <div className="container mt-4 mb-4">
        <div className="card p-4" style={{ backgroundColor: "#f8f9fa", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <div className="card-body">
            <div className="text-center">
              <label className="text-primary text-2xl my-2 font-bold">
                VALOR:
              </label>
              <input
                type="number"
                className="form-control form-control-lg text-center"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: "400px", margin: "0 auto" }}
              />
            </div>

            <div className="flex items-center my-4">
              <select
                className="form-select form-select-lg"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {Object.keys(conversionRates).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>

              <button
                className="mx-2 bg-white text-gray-500 font-bold border-gray-500 rounded-full p-2"
                onClick={handleSwapUnits}
              >
                <FaExchangeAlt />
              </button>

              <select
                className="form-select form-select-lg"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {Object.keys(conversionRates[fromUnit]).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-primary">
                <span className="text-2xl my-2 font-bold">RESULTADO</span>
                <div className="bg-white rounded p-4 shadow-lg my-2 text-primary">
                  {convertedAmount} {toUnit}
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medidas;
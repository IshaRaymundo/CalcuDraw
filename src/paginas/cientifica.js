import React, { useState } from 'react';
import * as math from 'mathjs';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cientifica() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        try {
          const result = math.evaluate(input);
          setOutput(result.toString());
        } catch (error) {
          setOutput('Error');
        }
        break;
      case 'C':
        setInput('');
        setOutput('');
        break;
      case 'sqrt':
        setInput(`sqrt(${input})`);
        break;
      case '^':
        setInput(`${input}^`);
        break;
      case 'sin':
        setInput(`sin(${input})`);
        break;
      default:
        setInput(input + value);
    }
  };

  const buttons = [
    '(', ')', 'sqrt', '^',
    'sin', 'cos', 'tan', 'ln',
    'log', 'exp', 'pi', 'e',
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/',
  ];
  return (
    <div className="bg-[#f7f7f8] min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">CALCULADORA MATEMÁTICA</h1>
      </header>
      <div className="container mx-auto mt-5">
        <div className="flex">
          <div className="w-1/2 p-4">
            <div className="calculator rounded-md bg-blue-200 p-4 shadow">
              <input
                type="text"
                className="form-control mb-3 bg-white"
                value={input}
                readOnly
              />
              <input
                type="text"
                className="form-control mb-3 bg-white"
                value={output}
                readOnly
              />
              <div className="grid grid-cols-4 gap-2">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className="btn btn-secondary"
                    onClick={() => handleButtonClick(button)}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="notes bg-yellow-200 rounded-md p-4 shadow">
              <h2 className="text-2xl font-semibold mb-4">Notas</h2>
              <textarea
                className="form-control h-64 bg-white"
                placeholder="Toma tus notas aquí"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cientifica;

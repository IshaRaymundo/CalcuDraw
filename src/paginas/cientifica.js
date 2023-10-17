import React, { useState } from 'react';
import * as math from 'mathjs'; 
import 'bootstrap/dist/css/bootstrap.min.css'

function Cientifica() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
  
    const handleButtonClick = (value) => {
      if (value === '=') {
        try {
          const result = math.evaluate(input);
          setOutput(result.toString());
        } catch (error) {
          setOutput('Error');
        }
      } else if (value === 'C') {
        setInput('');
        setOutput('');
      } else {
        setInput(input + value);
      }
    };
  
    const buttons = [
      '7', '8', '9', '+',
      '4', '5', '6', '-',
      '1', '2', '3', '*',
      'C', '0', '=', '/'
    ];
  
    return (
      <div className="container mx-auto mt-5">
        <div className="calculator">
          <input type="text" className="form-control mb-3" value={input} readOnly />
          <input type="text" className="form-control mb-3" value={output} readOnly />
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
    );
  }
  
  export default Cientifica;
  
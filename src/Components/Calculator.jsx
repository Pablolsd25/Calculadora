import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (number) => {
    if (result === '0') {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setOperation(operator);
    setResult('0');
  };

  const handleEqualClick = () => {
    switch (operation) {
      case '+':
        setResult(parseInt(result) + parseInt(result));
        break;
      case '-':
        setResult(parseInt(result) - parseInt(result));
        break;
      case '*':
        setResult(parseInt(result) * parseInt(result));
        break;
      case '/':
        setResult(parseInt(result) / parseInt(result));
        break;
      default:
        setResult(result);
        break;
    }
    setOperation('');
  };

  const handleClearClick = () => {
    setResult('0');
    setOperation('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">{result}</div>
        <div className="calculator-keys">
          <button className="calculator-key" onClick={() => handleNumberClick('7')}>7</button>
          <button className="calculator-key" onClick={() => handleNumberClick('8')}>8</button>
          <button className="calculator-key" onClick={() => handleNumberClick('9')}>9</button>
          <button className="calculator-key operator-key" onClick={() => handleOperatorClick('+')}>+</button>
          <button className="calculator-key" onClick={() => handleNumberClick('4')}>4</button>
          <button className="calculator-key" onClick={() => handleNumberClick('5')}>5</button>
          <button className="calculator-key" onClick={() => handleNumberClick('6')}>6</button>
          <button className="calculator-key operator-key" onClick={() => handleOperatorClick('-')}>-</button>
          <button className="calculator-key" onClick={() => handleNumberClick('1')}>1</button>
          <button className="calculator-key" onClick={() => handleNumberClick('2')}>2</button>
          <button className="calculator-key" onClick={() => handleNumberClick('3')}>3</button>
          <button className="calculator-key operator-key" onClick={() => handleOperatorClick('*')}>*</button>
          <button className="calculator-key" onClick={() => handleNumberClick('0')}>0</button>
          <button className="calculator-key" onClick={() => handleNumberClick('.')}>.</button>
          <button className="calculator-key operator-key" onClick={() => handleOperatorClick('/')}>/</button>
          <button className="calculator-key clear-key" onClick={() => handleClearClick()}>C</button>
          <button className="calculator-key equal-key" onClick={() => handleEqualClick()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
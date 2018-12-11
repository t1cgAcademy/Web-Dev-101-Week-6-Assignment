// CalculatorwithInstructions

import React from 'react';
import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      prevValue: '',
      operator: ''
      // set three more states called prevValue, operator, and result to empty strings
    };
  }
// What State is there?
// When does it change?
inputDigit = (digit) => {
  this.setState({
    displayValue: this.state.displayValue === '0' ? String(digit) : this.state.displayValue + digit
  });
}

inputDot = () => {
  // The line below checks to see if . is in display value.
  if (this.state.displayValue.indexOf('.') === -1) {
    this.setState({
      displayValue: `${this.state.displayValue }.`
    });
  }
  // Set the state of displayValue to equal the state of display value + '.'
}

clearDisplay = () => {
  this.setState({
    displayValue: '0'
  });
}
// Create clearDisplay function for the clearDisplay event listener below.  Set the state
// of displayValue to '0'

toggleSign = () => {
  const {displayValue} = this.state;
  const newValue = parseFloat(displayValue) * -1;
  this.setState({
    displayValue: String(newValue)
  });
}

inputPercent = () => {
  const value = parseFloat(this.state.displayValue);
  this.setState({
    // displayValue: this.state.displayValue / 100
    displayValue: String(value / 100)
  });
}

// Use fat arrow function to define prepareOperation onClick listener created in jsx.
// Pass operator as an argument for use in the function.
// set the state of operator to operator, prevValue to this.state.displayValue and
// set displayValue to '0'

prepareOperation = (operator) => {
  this.setState({
    prevValue: this.state.displayValue,
    displayValue: '0',
    operator
  });
}

equals = (operator, prevValue, displayValue) => {
  if (this.state.operator === '+') {
    const finalResult = parseFloat(this.state.displayValue) + parseFloat(this.state.prevValue);
    this.setState({
      displayValue: String(finalResult)
    });
  } else if (this.state.operator === '-') {
    const finalResult = parseFloat(this.state.prevValue) - parseFloat(this.state.displayValue);
    this.setState({
      displayValue: String(finalResult)
    });
  } else if (this.state.operator === '*') {
    const finalResult = parseFloat(this.state.displayValue) * parseFloat(this.state.prevValue);
    this.setState({
      displayValue: String(finalResult)
    });
  } else if (this.state.operator === '/') {
    const finalResult = parseFloat(this.state.prevValue) / parseFloat(this.state.displayValue);
    this.setState({
      displayValue: String(finalResult)
    });
  } else if (this.state.operator === 'mod') {
    const finalResult = parseFloat(this.state.prevValue) % parseFloat(this.state.displayValue);
    this.setState({
      displayValue: String(finalResult)
    });
  } else if (this.state.operator === '^') {
    const finalResult = this.power(parseFloat(this.state.prevValue), parseFloat(this.state.displayValue));
    this.setState({
      displayValue: String(finalResult)
    });
  }

}

factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return (num * this.factorial(num - 1));
}

power = (num, exp) => {
  if (exp === 0) {
    return 1;
  }
  return num * this.power(num, exp - 1);
}

inputFactorial = () => {
  const value = parseFloat(this.state.displayValue);
  this.setState({
    displayValue: String(this.factorial(value))
  });
}

render() {
  return (
    <div>
      <h3 id={style.numberDisplay}>{this.state.displayValue}</h3>
      <div className={style.operations}>
        <button onClick={() => this.clearDisplay()}>AC</button>
        <button onClick={() => this.inputPercent()}>%</button>
        <button onClick={() => this.toggleSign()}>±</button>
        <button onClick={() => this.inputFactorial()}>!</button>
      </div>
      <div className={style.numberFields}>
        <button onClick={() => this.inputDigit(0)}>0</button>
        <button onClick={() => this.inputDot()}>•</button>
        <button onClick={() => this.inputDigit(1)}>1</button>
        <button onClick={() => this.inputDigit(2)}>2</button>
        <button onClick={() => this.inputDigit(3)}>3</button>
        <button onClick={() => this.inputDigit(4)}>4</button>
        <button onClick={() => this.inputDigit(5)}>5</button>
        <button onClick={() => this.inputDigit(6)}>6</button>
        <button onClick={() => this.inputDigit(7)}>7</button>
        <button onClick={() => this.inputDigit(8)}>8</button>
        <button onClick={() => this.inputDigit(9)}>9</button>
        <button onClick={() => this.inputDigit('(')}>(</button>
        <button onClick={() => this.inputDigit(')')}>)</button>
      </div>
      <div className={style.operations}>
        <button onClick={() => this.prepareOperation('/')}>÷</button>
        <button onClick={() => this.prepareOperation('*')}>x</button>
        <button onClick={() => this.prepareOperation('-')}>-</button>
        <button onClick={() => this.prepareOperation('+')}>+</button>
        <button onClick={() => this.prepareOperation('mod')}>mod</button>
        <button onClick={() => this.prepareOperation('^')}>^</button>
        <button onClick={() => this.equals()}>=</button>
      </div>
    </div>
  );
}
}

export default App;

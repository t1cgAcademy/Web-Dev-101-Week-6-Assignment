CalculatorwithInstructions

import React from 'react';
import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      //set three more states called prevValue, operator, and result to empty strings
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
  //The line below checks to see if . is in display value.
  if(this.state.displayValue.indexOf('.') === -1);
  //Set the state of displayValue to equal the state of display value + '.'
}

//Create clearDisplay function for the clearDisplay event listener below.  Set the state
// of displayValue to '0'

toggleSign = () => {
  //Define your toggleSign function for toggleSign event listener defined below
  //use an if else statement to create a button that adds or removes the negative sign
  //from the displayValue.
}

inputPercent = () => {
  const value = parseFloat(this.state.displayValue);
  this.setState({
    // displayValue: this.state.displayValue / 100
    displayValue: String(value/100)
  });
}

//Use fat arrow function to define prepareOperation onClick listener created in jsx.
//Pass operator as an argument for use in the function.
//set the state of operator to operator, prevValue to this.state.displayValue and
//set displayValue to '0'

equals = (operator, prevValue, displayValue) => {
  // alert("My displayValue currently is ==>" + this.state.displayValue + "My prevValue currently is ---" + this.state.prevValue)

  if(this.state.operator === '+'){
    let finalResult = parseFloat(this.state.displayValue) + parseFloat(this.state.prevValue);
    this.setState({
      displayValue: String(finalResult)
    });
  }
  //Use an if else statement that looks for this.state.operator to equal the string value of the operator passed into the function,
  //and to perform the corresponding math operation if condition is true.  parseFloat is wrapped around the string state values to
  //convert them into numbers.  Use the first part of the if statement above as a reference
  }
}

  render() {
    return (
      <div>
      <h3 id={style.numberDisplay}>{this.state.displayValue}</h3>
        <div className={style.operations}>
        //add onClick listeners to the following buttons and define above
          <button>AC</button>
          <button>%</button>
          <button>±</button>
        </div>
        <div className={style.numberFields}>
          <button onClick={() => this.inputDigit(0)}>0</button>
          <button onClick={() => this.inputDot()}>•</button>
          //Add buttons for digits 1 through 9 and create an onClick function listener
          //for each button that passes the corresponding number value as an argument
          //similar to the 0 onClick above
        </div>
        <div className={style.operations}>
          <button onClick={() => this.prepareOperation('/')}>÷</button>
          <button onClick={() => this.prepareOperation('*')}>x</button>
          <button onClick={() => this.prepareOperation('-')}>-</button>
          <button onClick={() => this.prepareOperation('+')}>+</button>
          <button onClick={() => this.equals()}>=</button>
        </div>
      </div>
    );
  }
}

export default App;

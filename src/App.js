import React, { Component } from 'react';
import Display from './components/Display'
import Button from './components/button'
import Calculator from './services/calculator'
import './App.css';
import button from './components/button';

class App extends Component {
  state={
    numberA:0,
    numberB:null,
    action:null,
    actions:['+','-','*','/','='],
    numbers:[1,2,3,4,5,6,7,8,9,0],
    curentNumber:'numberA'
  }
  handleNumberClick=(e) =>{
    const value = e.target.dataset.action;
    const curentNumber = this.state.curentNumber;
    const numberValue = this.state[curentNumber]  || 0;
    const newValue = numberValue === 0 ? value : this.state[curentNumber] + value;
    this.setState({
      [curentNumber]: newValue
    });
  }
  handleActionClick=(e) =>{
    const action=e.target.dataset.action;
    if (this.state.numberA === 0) {
      return;
    }
    if (this.state.action && this.state.numberB) {
      const value = Calculator.calculate(this.state.numberA, this.state.numberB, this.state.action);
      this.setState({
        numberA: value.toString(),
        numberB: null,
        action: null
      });
    }

    if (action === '=') {
      return;
    }
    this.setState({ 
      action,
      curentNumber:'numberB'
    });
  }
  reset= () =>{
    this.setState({
      numberA: 0,
      numberB: null,
      action: null,
      curentNumber:'numberA'
    })
  }
  render() {

    return (
      <div className="App">
        <Display numberA={this.state.numberA} numberB={this.state.numberB} action={this.state.action}></Display>
        <div className='buttons'>
          <div className='numbers'>
            {this.state.numbers.map((el,ind) => <Button key={ind} onAction={this.handleNumberClick} action={el}></Button>)}  
          </div>
          <div className='actions'>
            {this.state.actions.map((el,ind) => <Button key={ind} onAction={this.handleActionClick} action={el}></Button>)}
            <Button action={"CE"} onAction={this.reset}> </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import store from '../../store';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Display from '../Display';
import History from '../History';
import Operators from '../Operators';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <main className="react-calculator">
        <Display text={store.getState().curExpression} />
        <ControlPanel />
        <Digits />
        <Operators />
        <History
          showHistory={store.getState().showHistory}
          history={store.getState().history}
        />
      </main>
    );
  }
}

export default Calculator;

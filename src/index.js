import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const renderCalculator = () => {
  ReactDOM.render(<Calculator />, document.getElementById('root'));
};
store.subscribe(renderCalculator);
renderCalculator();
registerServiceWorker();

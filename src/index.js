import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { createGameStore } from './stores/GameStore';

ReactDOM.render(
  <App {...{ store: createGameStore() }} />,
  document.getElementById('root')
);

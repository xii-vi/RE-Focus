import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimeProvider, WeatherProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <TimeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </TimeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/react_dates_overrides.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

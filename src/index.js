import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';
import 'bootstrap';

const $ = jQuery

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

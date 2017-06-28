import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import products from './products'

ReactDOM.render(
	<App2/>, 
	document.getElementById('root') 
);	
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import './index.css';
import App from './App';
import Heading from './Heading';
import * as serviceWorker from './serviceWorker';

const fname = "Supreet";
const product = <Products id="1"  name="mobile" cost="20000" quantity="20"></Products>
ReactDOM.render(
   [ <Heading/>,
        <p>this is p tag</p>,
        <p> my first name is {fname}</p>,
    product],
       
        
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

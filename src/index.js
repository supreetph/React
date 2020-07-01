import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import './index.css';
import App from './App';
import Heading from './Heading';
import * as serviceWorker from './serviceWorker';
import Customer from './Customer';

const fname = "Supreet";
const product =
    [
        
             < Products id = "1" name = "mobile" cost = "20000" quantity = "20" ></Products >
        ,
        <br/>,
        < Products id="2" name="laptop" cost="7000" quantity="20" ></Products >
    ]

const customer = <Customer Id="1" name="Tom" city="Bangalore" number="99888888888"></Customer>
ReactDOM.render(
   [ <Heading/>,
        <p>this is p tag</p>,
        <p> my first name is {fname}</p>,
        product,<br/>, customer],
       
        
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

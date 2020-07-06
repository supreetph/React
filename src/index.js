import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import './index.css';

import App from './App';
import Heading from './Heading';
import * as serviceWorker from './serviceWorker';
import Customer from './Customer';
import SimpleForm from './SimpleForm'
import FireBaseCompo from './FireBaseCompo';
import ApiForMongoCrud from './ApiForMongoCrud';
import SimpleFormNew from './SimpleFormNew';

import Corona from './Corona';


ReactDOM.render([
    <h1>hello world</h1>,
    //<FireBaseCompo/>
    //<Corona/>
   // <ApiForMongoCrud/>
    <SimpleFormNew/>
    ],
        
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

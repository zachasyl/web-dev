import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from "./helloworld.js";
import List from "./list.js";
import names from './names.json';
import NavigationExample from './NavigationExample.js'

ReactDOM.render(
//  <h1>Hello World123!</h1>,
//<HelloWorld/>,
//  <List/>,
//    <List names = {names}/>,
   <NavigationExample/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

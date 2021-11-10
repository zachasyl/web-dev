import React from 'react';
import ReactDOM from 'react-dom';
import Select from '@mui/material/Select';
import './vendors/bootstrap/css/bootstrap.min.css';
import IamStateless from "./Stateless";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWorld from "./helloworld.js";
import List from "./list.js";
import names from './names.json';
import NavigationExample from './NavigationExample.js'
import ReduxExamples from "./components/lectures/w8/ReduxExamples";
import Projectapp from "./components/project/Projectapp";
import * as PropTypes from "prop-types";
import HelloWorld from "./hello"
import Hello from "./components/lectures/w8/Hello";
<link type="text/css" rel="stylesheet" href="../a6.css" />


function Message(props) {
    return null;
}

// Message.propTypes = {message: PropTypes.string};
//
//
//
// IamStateless.propTypes = {message: PropTypes.string};

//  <h1>Hello World123!</h1>,
//  <HelloWorld/>,
//  <List/>,
//  <List names = {names}/>,
//  <NavigationExample/>,

//<ReduxExamples/>,
// <Projectapp/>,

ReactDOM.render(

    <div> <HelloWorld/>,
        <App />,

        {/*<Message message="Hello World 2"/>*/}
        {/*<IamStateless message X={2} Y={2}/>*/}
    </div>,
    document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import HelloWorld from './helloworld.js';
import List from './list.js';
import GoodbyeWorld from './goodbyeworld.js';
import {BrowserRouter, Route} from "react-router-dom";



const NavigationExample = () =>{

    return(

        <>
            <BrowserRouter>
                <Route path = "/hello">
                    <HelloWorld/>
                </Route>
                <Route path = "/goodbye">
                    <GoodbyeWorld/>
                </Route>
            </BrowserRouter>
        </>
    )


};

export default NavigationExample;
import React from "react";
import {Link} from "react-router-dom"
import Navigation from "./navigation.js";

// jsx syntax instead of return(``);
// remember we needed those annnoying
// $ symbols within the `` in ES6
// and in ES5 we had concatanations even worse

const HelloWorld = () => {
    return(
        <div>
        <Navigation/>


        <h1>Hello World123!</h1>
        </div>
    );
};

export default HelloWorld

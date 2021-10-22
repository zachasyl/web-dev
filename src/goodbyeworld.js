import React from "react";
import Navigation from "./navigation.js";

// jsx syntax instead of return(``);
// remember we needed those annnoying
// $ symbols within the `` in ES6
// and in ES5 we had concatanations even worse

const GoodbyeWorld = () => {
    return(
        <div>
        <Navigation/>
        <h1>Goodbye World123!</h1>
        </div>
    );
};

export default GoodbyeWorld

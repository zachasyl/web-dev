import React from "react";
import Hello from "./Hello";
import helloReducer from "./helloReducer";
import counterReducer from "./counterReducer";
import {combineReducers} from "redux";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "./Counter";

const mainReducer = combineReducers({
    hello: helloReducer,
    count: counterReducer
})
//const store =  createStore(helloReducer);
// can pass mainreducer to have all reducers
const store =  createStore(mainReducer);


//this is app.js


// provider is part of reddit library all children can use data in store
// all components inside the provider receive the store.
//Here, the Hello component receives
// the store

// the hello component, in hello.js, still needs to retrive the message from the store
const App = () =>{

    return(
        <Provider store = {store}>
            <div>
                <h1> My App </h1>
                <Counter/>
                <Hello/>
            </div>
        </Provider>
    )

}

export default App;
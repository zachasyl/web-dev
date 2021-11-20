import React from "react";
import HelloReduxExampleComponent
    from "./HelloReduxExampleComponent";
import Todos from "./Todos";
import hello from "../reducers/hello";
import todos from "../reducers/todos";
import {Provider} from "react-redux";

import {createStore, combineReducers} from "redux";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

// const store = createStore(hello);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples 7</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;

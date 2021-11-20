import '../../../vendors/bootstrap/bootstrap.min.css';

import React from "react";
import {Route} from "react-router-dom";

import HomeScreen from "./HomeScreen/HomeScreen.js";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import who from "../../../reducers/who.js";

import tweets from "../../../reducers/tweets.js";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);


const Build = () => {
    return(
        <Provider store={store}>

            <div>
                <Route path={["/a8/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>

            </div>
        </Provider>

    );
};
export default Build;






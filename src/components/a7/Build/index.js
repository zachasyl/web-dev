import '../../../vendors/bootstrap/bootstrap.min.css';

import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen.js";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import who from "../../../reducers/who.js";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(who);

const Build = () => {
    return(
        <Provider store={store}>

            <div>
                <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </Provider>

    );
};
export default Build;






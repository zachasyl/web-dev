
import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";


import Practice7 from "./components/a7/Practice";
import Build from "./components/a6/Build";
import Build7 from "./components/a7/Build";

import HomeScreen from  "./components/a6/Build/HomeScreen/HomeScreen.js";
import ExploreScreen from  "./components/a6/Build/ExploreScreen/ExploreScreen.js";


import who from "./reducers/who";
import {Provider} from "react-redux";




import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (

            <BrowserRouter>
                <div className="container">

                    <Route path="/a6/hello" exact={true}>
                        <HelloWorld/>
                    </Route>
                    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a6/build" exact={true}>
                        <Build/>
                    </Route>
                   <Route path="/a6/twitter/home" component={HomeScreen}>

                   </Route>
                   <Route path="/a6/twitter/explore" exact={true}>
                        <ExploreScreen/>
                   </Route>
                    <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                        <Practice7/>
                    </Route>
                    <Route path="/a7/twitter">
                        <Build7/>
                    </Route>



                </div>
            </BrowserRouter>

       );
     }

export default App;

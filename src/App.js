
import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";


import Practice7 from "./components/a7/Practice";
import Build from "./components/a6/Build";
import Build7 from "./components/a7/Build";
import a9practice from "./components/a9/";

import Practice8 from "./components/a8/Practice";

import A9 from "./components/a9/Practice";

import A9B from "./components/a9/Build/";
import Build8 from "./components/a8/Build/";
import A9explore from  "./components/a9/Build/ExploreScreen/ExploreScreen.js";

import ExploreScreen8 from  "./components/a8/Build/ExploreScreen/ExploreScreen.js";

import profile from "./components/a7/Build/ProfileScreen/ProfileScreen"

import HomeScreen8 from  "./components/a8/Build/HomeScreen/HomeScreen.js";

import HomeScreen from  "./components/a6/Build/HomeScreen/HomeScreen.js";
import ExploreScreen from  "./components/a6/Build/ExploreScreen/ExploreScreen.js";

import who from "./reducers/who";
import {Provider} from "react-redux";


import {BrowserRouter, Route} from "react-router-dom";
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
import EditScreen from "./components/a7/Build/ProfileScreen/EditScreen";


import ProfileScreen8 from "./components/a7/Build/ProfileScreen/ProfileScreen";
import EditScreen8 from "./components/a7/Build/ProfileScreen/EditScreen";
import {Link} from "react-router-dom"



function App() {
  return (

            <BrowserRouter>
                <div className="container">
                    <Link to="/a8/practice">A8</Link> |

                    <Link to="/a8/practice">A8</Link> |
                    <Link to="/a9/practice">A9</Link>
                    <Link to="/a9/build">A9B</Link>


                    <Route path="/a6/hello" exact={true}>
                        <HelloWorld/>
                    </Route>
                    <Route path={["a6", "/a6/practice"]} exact={true}>
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






                    <Route path={["/a7", "/a7/practice"]} exact={true}>
                        <Practice7/>
                    </Route>
                    <Route path="/a7/twitter">
                        <Build7/>
                    </Route>
                    <Route path="/a7/twitter/profile">
                        <ProfileScreen/>
                    </Route>
                    <Route path="/a7/twitter/edit">
                        <EditScreen/>
                    </Route>






                    <Route path={["/a8", "/a8/practice"]} exact={true}>
                        <Practice8/>
                    </Route>
                    <Route path="/a9/Practice">
                        <A9/>
                    </Route>


                    <Route path="/a8/twitter/home">
                        <Build8/>
                    </Route>
                    <Route path="/a9/twitter/home">
                        <A9B/>
                    </Route>
                    <Route path="/a9/twitter/explore">
                        <A9explore/>
                    </Route>
                    <Route path="/a8/twitter/profile">
                        <ProfileScreen8/>
                    </Route>
                    <Route path="/a8/twitter/edit">
                        <EditScreen8/>
                    </Route>

                    <Route path="/a8/twitter/explore" exact={true}>
                        <ExploreScreen8/>
                    </Route>





                </div>
            </BrowserRouter>

       );
     }

export default App;

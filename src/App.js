import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import {BrowserRouter, Route} from "react-router-dom";

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>


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
                </div>
            </BrowserRouter>

       );
     }

export default App;

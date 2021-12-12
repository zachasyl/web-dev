import "./index.css";

import React from "react";
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Navbar from "../project/Navbar.js"
import Demo from "./Demo.js"
import Body from "./Body.js";
import Login from "./Login";
import Caurosel from "./Caurosel";

const ewq = [28,107,26,65,95]


class PC extends React.Component {
    render() {
        return(
            <h1>GO</h1>
        )
    }
}

const p = new PC(1);



const App = () =>{

    return(
        <div>
            {/*<Navbar/>*/}

            {/*<Body/>*/}

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Body} />
                    <Route exact path='/login' component={Login} />

                </Switch>
            </BrowserRouter>



        </div>
    )

}

export default App;


import React from "react";
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

import Navbar from "../project/Navbar.js"
import Demo from "./Demo.js"
import Body from "./Body.js";

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
    // return(p)

    // let sc = {
    //     xi: 'fv',
    //     gu: 'xe'
    // }
    // let jm = {
    //     gu: 'cr',
    //     yd: 'um',
    //     ...sc,
    // }
    // sc = {
    //     ...jm,
    //     gu: 'xg',
    //     yd: 'kd'
    // }
    // console.log(sc.xi)
    return(
        <div>


            {/*<ul>*/}
            {/*    {*/}
            {/*        ewq.filter(*/}
            {/*            function(dsa){*/}
            {/*                return dsa > 50*/}
            {/*            })*/}
            {/*            .map(*/}
            {/*                function(rew) {*/}
            {/*                    return(*/}
            {/*                        <li>{rew}</li>*/}
            {/*                    )*/}
            {/*                })*/}
            {/*    }*/}
            {/*</ul>*/}





            <Navbar/>
            <Body/>

        </div>
    )

}

export default App;


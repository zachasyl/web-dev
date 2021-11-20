import APIExamples from "./APIExamples";
import ReduxExamples from "../src/components/a7/Practice/ReduxExamples/components";
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";


const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>

            <ReduxExamples/>
        </div>
    )
};
export default Practice;

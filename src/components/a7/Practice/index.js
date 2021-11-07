import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";


const Practice7 = () => {
    return(
      <>
          <h1>Practice 7</h1>

          <Link to="/a7/build">Build</Link>
          <ReduxExamples/>

      </>
    )
};

export default Practice7;

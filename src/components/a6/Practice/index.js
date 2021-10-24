import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";


const Practice = () => {
    return(
      <>
          <h1>Practice</h1>
            <ConditionalOutput/>
            <Styles/>
           <Classes/>
            <TodoList/>

          <Link to="/a6/twitter/home">

              Hello
          </Link> |
          <Link to="/a6/twitter/home">
              Build
          </Link>
      </>
    )
};

export default Practice;

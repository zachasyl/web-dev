import React from "react";
import {useSelector} from "react-redux";
// we need to get info from the store
// use selector looks at EVERYTHING in the store but there is just one string in sample.
const Hello = () => {
//    const message = useSelector(state => state) choose hello from store
      const message = useSelector(state => state.hello)

    return(
        <h2> {message}</h2>
    )
}

export default Hello;
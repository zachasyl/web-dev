import React from "react";
import {useDispatch, useSelector} from "react-redux";

// from the whole state, lets take the count state.
const Counter = () => {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch()
    const plus = () =>{
        const action = {
            type: 'increment-counter'
        }
        // will call all reducers, including hello, and ask if they know what do do
        // with event. the counter will then handle it.
        dispatch(action);
    }
    const minus = () =>{
            const action = {
                type: 'decrement-counter'
            }
            // will call all reducers, including hello, and ask if they know what do do
            // with event. the counter will then handle it.
            dispatch(action);
        }

    return(
        <div>
            <h2> Counter = {count}</h2>
            <button onClick ={plus}>+</button>
            <button onClick ={minus}>-</button>
        </div>
    )
}
export default Counter;
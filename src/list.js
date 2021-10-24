import React from 'react';


//const List = () =>{
//    return(
//        <ul>
//            <li> item one </li>
//            <li> item two </li>
//        </ul>
//
//    );
//};
//export default List
//



//const List = () =>{
//    const Array = [1,2,3,4,5];
//    return(
//        <ul>
//            {
////        for every item in array invoke function
//            Array.map((number) => {
//                return(<li>{number}</li>)
//            })
//            }
//        </ul>
//
//    );
//};
//export default List



//const List = () =>{
//    const Array = [
//        {firstName: 'Zach', lastName: 'Sylvane'},
//        {firstName: 'Jack', lastName: 'Silverman'},
//    ];
//    return(
//        <ul>
//            {
////        for every item in array invoke function
//            Array.map((name) => {
//                return(<li>{name.lastName}</li>)
//            })
//            }
//        </ul>
//
//    );
//};
//export default List


//import names from './names.json';
//const List = () =>{
//
//    return(
//        <ul>
//            {
////        for every item in array invoke function
//            names.map((name) => {
//                return(<li>{name.lastName}</li>)
//            })
//            }
//        </ul>
//
//    );
//};
//export default List


//import names from './names.json';
// the import is done in the parent index.js instead.
const List = ({names}) =>{
    return(
        <ul>
            {
//        for every item in array invoke function
            names.map((name) => {
                return(<li>{name.firstName}</li>)
            })
            }
        </ul>

    );
};
export default List
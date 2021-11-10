import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "./who"
import {useSelector} from "react-redux";

//The WhoToFollowList function should iterate over the who array
//and use the function WhoToFollowListItem to generate the list
//shown above.

const WhoToFollowList = () => {
    const who = useSelector((state) => state);

    return (
            <ul class="list-group">
             {
                  who.map(who => {
                      return(
                          <WhoToFollowListItem who={who}/> );
                  })
              }

            </ul>
); }
export default WhoToFollowList;




//export default [
//        {   avatarIcon: '../../images/java.png',
//            userName: 'Java', handle: 'Java', },
//        {   avatarIcon: '../../images/relativity.jpeg',
//            userName: 'Relativity Space',
//            handle: 'relativityspace', },
//        {   avatarIcon: '../../images/virgin.png',
//            userName: 'Virgin Galactic',
//            handle: 'virgingalactic', },
//        {   avatarIcon: '../../images/nasa.png',
//            userName: 'NASA', handle: 'NASA', },
//        {   avatarIcon: '../../images/tesla.png',
//            userName: 'Tesla', handle: 'Tesla', }, ];

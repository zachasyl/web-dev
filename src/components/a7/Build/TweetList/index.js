import React from "react";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";


//The WhoToFollowList function should iterate over the who array
//and use the function WhoToFollowListItem to generate the list
//shown above.

const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
    const tweets = useSelector(selectAllTweets);

    return (
            <ul class="list-group">
             {
                 tweets.map(tweet => {
                      return(
                          <TweetListItem tweet={tweet}/> );
                  })
              }

            </ul>
); }
export default TweetList;





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

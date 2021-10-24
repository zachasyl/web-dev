import React from "react";
import NavigationSidebar from "./NavigationSidebar";

import PostSummaryItem from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import WhoToFollowList from "./WhoToFollowList";
import WhoToFollowList2 from "./WhoToFollowList2";
import HomeScreen from "./HomeScreen/HomeScreen.js";

import '../../../vendors/bootstrap/bootstrap.min.css';
const Build = () => {
    return(
         <>
{/*
              <ExploreComponent/>
              <PostSummaryItem/>
              <NavigationSidebar active="home"/>
              <WhoToFollowListItem/>
*/}
              <HomeScreen/>

         </>

    )
};
export default Build;



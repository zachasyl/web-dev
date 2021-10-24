import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";

const Build = () => {
    return(
         <>
               <PostSummaryItem/>
               <NavigationSidebar active="home"/>
               <WhoToFollowListItem/>

         </>

    )
};
export default Build;

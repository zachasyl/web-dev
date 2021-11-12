import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import TweetList from "../TweetList/index.js";
import WhoToFollowList from "../WhoToFollowList";
import PostSummaryList from "../PostSummaryList";
import WhatsHappening from "../WhatsHappening";
import Edit from "../Profile/EditListItem";

const EditScreen = (
    {
        active = 'home'
    }) => {
    return(

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="mt-2 col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*this is the post  list*/}

                <Edit/>

            </div>
            <div className="col-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>

            </div>
        </div>
    );
};
export default EditScreen;

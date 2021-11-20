import React from "react";
import ProfileListItem from "./ProfileListItem";
import profile from "./profile"

//The WhoToFollowList function should iterate over the who array
//and use the function WhoToFollowListItem to generate the list
//shown above.

const ProfileList = () => {
    return (
        <ul class="list-group">
            {
                profile.map(profile => {
                    return(
                        <ProfileListItem profile={profile}/> );
                })
            }

        </ul>
    ); }
export default ProfileList;


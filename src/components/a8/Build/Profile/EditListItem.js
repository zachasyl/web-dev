import '../rightcol.css'
import React from "react";
import {Link} from "react-router-dom";

const ProfileListItem = (
    {
        profile = {
            "firstName": "zach",
            "lastName": "sylvane",
            "handle": "zachasyl",
            "banner" : "../../../Images/banner.jpg",
            "avatar" : "../../../Images/react.png",

            "tweets" : "500",
            "synopsis" : "Currently taking web development and artificial intelligence...",

            "location" : "Boston, MA",
            "DOB" : "March 20, 1990",
            "following" : "5",
            "followers" : "10"


        }
    }) =>{

    return(
        <>
            <div className="col ">
                <ul className="">
                    <div className="big-text bold-only">
                        <h5>
                        <span className = "">
                          {profile.firstName}
                            <button  className="btn-primary fa-pull-right rounded-pill">
                                 <Link className = "btn-primary fa-pull-right rounded-pill" to="/a7/twitter/home"
                                       className={`list-group-item }`}>

                      <i className="blue"></i> Edit
                 </Link>
                            </button>
                        </span>



                            <span className = " m-2 ">

                            {profile.lastName}
                        </span>
                        </h5>

                    </div>
                    <div className="gray">
                        {profile.tweets} Tweets
                    </div>

                    <div className="gray position-relative ">
                        <img src = {profile.banner} width = "520px" height = "200px" className = " mt-2 mb-2 ">

                        </img>
                        <img src = {profile.avatar}  className = "avatar left ms-2 mt-2 mb-2 rounded-circle"></img>


                    </div>

                    <br/>
                    <div className="mt-5 ">
                        <h5>
                        <span className = "">
                          {profile.firstName}
                        </span>
                            <span className = " m-2 ">

                            {profile.lastName}
                        </span>
                        </h5>
                        <textarea></textarea>

                        <div className="gray ">

                            @{profile.handle}
                        </div>
                        <div className="gray mt-4 text-white">
                            {profile.synopsis}
                        </div>
                    </div>

                    <div class = "mt-5">
                        <span >{profile.location}</span>
                        <span class = "m-4">{profile.DOB}</span>
                    </div>

                    <div className="mt-2">
                        <span>{profile.following} following</span>
                        <span className="m-4">{profile.followers} followers</span>
                    </div>

                </ul>
            </div>


        </>

    )
}
export default ProfileListItem;



import React from "react";

import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
       active = 'explore'
    }) => {

    return(
        <div>
            <div className="list-group mt-2">

                <Link to="/a9/practice"
                    className="list-group-item">
                    <i className="fab fa-twitter"></i> Practice
                </Link>


                 <Link to="/a9/twitter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : 'explore'}`}>

                      <i className="fas fa-home no-decoration"></i> Home
                 </Link>
                 <Link to="/a9/twitter/explore"
                       className={`list-group-item ${active === 'explore' ? 'active' : 'home'}`}>

                       <i className="fas fa-hashtag"></i> Explore
                 </Link>



                    <li className="list-group-item"><i className="fas fa-bell"></i>  <span className = "d-none d-lg-inline-block">Notifications</span></li>
                    <li className="list-group-item"><i className="fas fa-envelope"></i>  <span className = "d-none d-lg-inline-block">Messages</span></li>

                    <li className="list-group-item "><i className="fas fa-bookmark"></i>  <span className = "d-none d-lg-inline-block">Bookmarks</span></li>
                    <li className="list-group-item "><i className="fas fa-list"></i>  <span className = "d-none d-lg-inline-block">List</span></li>
                    <li className="list-group-item "><i className="fas fa-user"></i>  <span className = "d-none d-lg-inline-block">Profile</span></li>
                    <li className="list-group-item ">
                    <span className="fa-stack">
                        <i className="fas fa-circle fa-stack-1x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span> <span className = "d-none d-lg-inline-block ">More</span>
                    </li>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;

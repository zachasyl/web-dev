import React from "react";


const NavigationSidebar = (
    {
       active = 'explore'
    }) => {
//
// if (active == 'home'){
//            const change = $('no-decoration');
//            change.attr('className', 'active');
//
//            }
// if (active == 'explore'){
//            const change = $('no-decoration');
//            change.attr('className', 'active');
//
//            }

    return(

        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                    <li className="list-group-item inactive-Home "><i className="fas fa-home no-decoration"></i> <span className = "d-none d-lg-inline-block"><a className = "no-decoration" href = "../HomeScreen/home.html" >Home</a></span></li>
                    <li className="list-group-item inactive-Explore "><i className="fas fa-hashtag"></i>  <span className = "d-none d-lg-inline-block"><a className = "no-decoration" href="../ExploreScreen/explore.html">Explore</a></span></li>

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

const NavigationSidebar = (active) => {
 if (active == 'home'){
            const change = $('no-decoration');
            change.attr('class', 'active');

            }
 if (active == 'explore'){
            const change = $('no-decoration');
            change.attr('class', 'active');

            }


    return(`


            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                    <li class="list-group-item inactive-Home "><i class="fas fa-home no-decoration"></i> <span class = "d-none d-lg-inline-block"><a class = "no-decoration" href = "../HomeScreen/home.html" >Home</a></span></li>
                    <li class="list-group-item inactive-Explore "><i class="fas fa-hashtag"></i>  <span class = "d-none d-lg-inline-block"><a class = "no-decoration" href="../ExploreScreen/explore.html">Explore</a></span></li></li>
                    <li class="list-group-item"><i class="fas fa-bell"></i>  <span class = "d-none d-lg-inline-block">Notifications</span></li></li>
                    <li class="list-group-item"><i class="fas fa-envelope"></i>  <span class = "d-none d-lg-inline-block">Messages</span></li></li>

                    <li class="list-group-item "><i class="fas fa-bookmark"></i>  <span class = "d-none d-lg-inline-block">Bookmarks</span></li></li>
                    <li class="list-group-item "><i class="fas fa-list"></i>  <span class = "d-none d-lg-inline-block">List</span></li>
                    <li class="list-group-item "><i class="fas fa-user"></i>  <span class = "d-none d-lg-inline-block">Profile</span></li>
                    <li class="list-group-item ">
                    <span class="fa-stack">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse  "></i>
                    </span> <span class = "d-none d-lg-inline-block ">More</span>


            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

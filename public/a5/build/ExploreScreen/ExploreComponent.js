import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`




            <div class = "position-relative wrap">
                      <input id="text-fields-username" placeholder="Search Twitter" class = "search-bar">
                                      <span>
                                      <i class="fas fa-search search-magni position-absolute"></i>
                                      </span>

                                      <a href = "exploresettings.html"><i class="fas fa-cog ps-3 position-relative"></i></a>
            </div>
                                 <ul class="nav nav-tabs mb-2 mt-2">
                                           <li class="nav-item">
                                    <a class="nav-link active" href="#">For You</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Trending</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#">Sports</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-none d-sm-inline-block" href="#">Entertainment</a>
                                </li>
           </ul>
                <li class = "list-group-item">

                                    <div class = " row position-relative">
                                        <img class = "main-image" src = "followers/starship.jpg">
                                        <span class = "position-absolute image-text">SpaceX's Starship</span>
                                    </div>
                                </li>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;






import PostList from "../PostList/index.js";

const HomeComponent = () => {
    return(`
             <div class = "position-relative wrap">
                                  <input id="text-fields-username" placeholder="Search Twitter" class = "search-bar">
                                                  <span>
                                                  <i class="fas fa-search search-magni position-absolute"></i>
                                                  </span>

                                                  <a href = "exploresettings.html"><i class="fas fa-cog ps-3 position-relative"></i></a>
                        </div>

           <ul class="nav mb-2 nav-tabs">
                      <ul class="nav nav-tabs mt-2">
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
           </ul>

           ${PostList()}
    `);
}
export default HomeComponent;






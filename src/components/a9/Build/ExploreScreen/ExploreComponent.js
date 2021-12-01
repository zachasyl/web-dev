import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <div>



            <div className = "position-relative wrap">
                <input id="text-fields-username" placeholder="Search Twitter" className = "search-bar"></input>
                <span>
                                      <i className="fas fa-search search-magni position-absolute"></i>
                                      </span>

                <a href = "exploresettings.html"><i className="fas fa-cog ps-3 position-relative"></i></a>
            </div>
            <ul className="nav nav-tabs mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link " href="#">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-sm-inline-block" href="#">Entertainment</a>
                </li>
            </ul>
            <li className = "list-group-item">

                <div className = " row position-relative">
                    <img className = "main-image" src = "../../../Images/starship.jpg"></img>
                    <span className = "position-absolute image-text">SpaceX's Starship</span>
                </div>
            </li>
            {PostSummaryList()}
        </div>
    );
}
export default ExploreComponent;




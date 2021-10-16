import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`

        <div class="row mt-2">
    <div class="col-2 mt-2 ms-3 ">
            ${NavigationSidebar('explore')}
         </div>
    <div class="col mt-2 ms-5 wrap">

            ${ExploreComponent()}
            </div>
    <div class="col-4 mt-2 d-none d-lg-inline-block position-relative">
            ${WhoToFollowList()}
        </div>
        </div>
        </div>
    `);
})($);


import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import HomeComponent from "./HomeComponent.js";
import WhoToFollowList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
    <div class="col-2 mt-2 ms-3 ">
            ${NavigationSidebar('home')}
        </div>
            <div class="col ms-5  mt-2">

            ${HomeComponent()}
            </div>
    <div class="col mt-2  ">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);



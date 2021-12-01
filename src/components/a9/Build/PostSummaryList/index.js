import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts"

//The WhoToFollowList function should iterate over the who array
//and use the function WhoToFollowListItem to generate the list
//shown above.

const PostSummaryList = () => {
    return (
        <ul class="list-group">
            {
                posts.map(posts => {
                    return(<PostSummaryItem posts = {posts}/>);
                })
            }

        </ul>
    ); }
export default PostSummaryList;




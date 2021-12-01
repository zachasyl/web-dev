import '../rightcol.css';


const PostSummaryItem = (
    {
        posts = { topic: String,
            posted: {type: Date, defaultValue: Date.now},
            userName: String,
            verified: {type: Boolean, defaultValue: false},
            handle: String,
            title: String,
            tweet: String,
            attachments: {
                image: String
            },
            time: String,
            "logo-image": String,
            "avatar-image": String,
            stats: {
                comments: {type: Number, defaultValue: 9},
                retweets: {type: Number, defaultValue: 0},
                likes: {type: Number, defaultValue: 0}
    }}}
) => {

     return(

<ul className="position-relative p-0 rounded">


<li className = "list-group-item">
                    <div className = "row">
                    <div className="col ">
                        <div className = "gray">{posts.topic}</div>
                        <div className><span className = "bold">{posts.userName}</span> <i className="fas fa-check-circle"></i> </div>
                        <div className = "bold">{posts.title}</div>

                    </div>
                    <div className="col ms-5 ">

                        <img className = "news-image" src = {posts.image}></img>
                    </div>
                    </div>

                </li>
                </ul>
    );
}
export default PostSummaryItem;
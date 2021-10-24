const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }
) => {

     return(

<ul className="position-relative p-0 rounded">


<li className = "list-group-item">
                    <div className = "row">
                    <div className="col ">
                        <div className = "gray">{post.topic}</div>
                        <div className><span className = "bold">{post.userName}</span> <i className="fas fa-check-circle"></i> <span className = "gray">{post.time}</span></div>
                        <div className = "bold">{post.title}</div>
                    </div>
                    <div className=" ">

                        <img className = "news-image" src = {post.image}></img>
                    </div>
                    </div>

                </li>
                </ul>
    );
}
export default PostSummaryItem;
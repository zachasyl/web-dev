import '../rightcol.css';


const PostSummaryItem = (
    {
        posts = {
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
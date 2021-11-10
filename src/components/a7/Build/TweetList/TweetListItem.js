
const TweetListItem = (
    {
        tweet = {
            "userName": "Web Development",
            "handle": "ReactJS",
            "time": "ReactJS",
            "title": "ReactJS",
            "profileImage": "ReactJS",
            "image": "ReactJS",
            "postTitle": "ReactJS",
            "synopsis": "ReactJS",
            "comments": "ReactJS",
            "retweet": "ReactJS",
            "likes": "ReactJS",
            "download": "ReactJS",
        }
    }) =>{

     return(
    <div className = "ms-5">

<div className="">

        <div className = "bookmarks"><img className = "bookmark-image" src = {tweet.profileImage}  ></img></div>
        <p className="handle-margin">{tweet.userName} <span className="handle">{tweet.handle} </span> </p>
        <p className = "handle-margin" >
           {tweet.title}
        </p>
        </div>
    <div className="big-border mb-2">
            <div className = "bookmarks  ">
                <img className = "big-image left-margin top-margin-12 " src = {tweet.image}  ></img>
                <p className = "left-margin white-and-bold no-top-bottom-margin" >
                   {tweet.postTitle}
                </p>
                <p className = "left-margin no-top-bottom-margin gray " >
                   {tweet.synopsis}
                </p>
            </div>

     </div>
     <div className = "no-top-bottom-margin gray ">

        <span className = "  ps-5 ms-5 far fa-heart ">{tweet.comments}</span>

        <span className = "  p-3 fas fa-retweet ">{tweet.retweet}</span>

        <span className = "  p-3 far fa-heart">{tweet.likes}</span>

        <span className = "p-3 fas fa-download">{tweet.download}</span>
      </div>

    </div>
          );
      }
export default TweetListItem;
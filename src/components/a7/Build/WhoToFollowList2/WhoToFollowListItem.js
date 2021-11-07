
const WhoToFollowListItem = (
    {
        who = {
            "userName": "Web Development",
            "handle": "ReactJS",
            "time": "ReactJS",
            "title": "ReactJS",
            "profileImage": "ReactJS",
            "image": "ReactJS",
            "postTitle": "ReactJS",
            "synopsis": "ReactJS",
            "comments": "ReactJS",
            "retweets": "ReactJS",
            "likes": "ReactJS",
            "download": "ReactJS",
        }
    }) =>{

     return(
    <div className = "ms-5">

<div className="">

        <div className = "bookmarks"><img className = "bookmark-image" src = {who.profileImage}  ></img></div>
        <p className="handle-margin">{who.userName} <span className="handle">{who.handle} </span> </p>
        <p className = "handle-margin" >
           {who.title}
        </p>
        </div>
    <div className="big-border mb-2">
            <div className = "bookmarks  ">
                <img className = "big-image left-margin top-margin-12 " src = {who.image}  ></img>
                <p className = "left-margin white-and-bold no-top-bottom-margin" >
                   {who.postTitle}
                </p>
                <p className = "left-margin no-top-bottom-margin gray " >
                   {who.synopsis}
                </p>
            </div>

     </div>
     <div className = "no-top-bottom-margin gray ">

        <span className = "  ps-5 ms-5 far fa-heart ">{who.comments}</span>

        <span className = "  p-3 fas fa-retweet ">{who.retweets}</span>

        <span className = "  p-3 far fa-heart">{who.likes}</span>

        <span className = "p-3 fas fa-download">{who.download}</span>
      </div>

    </div>
          );
      }
export default WhoToFollowListItem;
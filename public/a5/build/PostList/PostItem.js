
const PostItem = (posts) => {

     return(`


<div class="">

        <div class = "bookmarks"><img class = "bookmark-image" src = "${posts.profileImage}"  ></div>
        <p class="handle-margin">${posts.userName} <span class="handle">${posts.handle}</span> </p>
        <p class = "handle-margin" >
           ${posts.title}
        </p>
        </div>
    <div class="big-border mb-2">
            <div class = "bookmarks  ">
                <img class = "big-image left-margin top-margin-12" src = "${posts.image}"  >
                <p class = "left-margin white-and-bold no-top-bottom-margin" >
                   ${posts.postTitle}
                </p>
                <p class = "left-margin no-top-bottom-margin gray " >
                   ${posts.synopsis}
                </p>
            </div>



     </div>
     <div class = "no-top-bottom-margin gray ">

        <span class = "  ps-5 ms-5 ">${posts.comments}</span>

        <span class = "  p-3 ">${posts.retweets}</span>

        <span class = "  p-3 ">${posts.likes}</span>

        <span class = "p-3 ">${posts.download}</span>
      </div>


          `);
      }
export default PostItem;
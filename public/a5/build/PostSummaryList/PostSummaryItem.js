
const PostSummaryItem = (posts) => {

     return(`

<ul class="position-relative p-0 rounded">



<li class = "list-group-item">
                    <div class = "row">
                    <div class="col ">
                        <div class = "gray">${posts.topic}</div>
                        <div class><span class = "bold">${posts.userName}</span> <i class="fas fa-check-circle"></i> <span class = "gray">${posts.time}</span></div>
                        <div class = "bold">${posts.title}</div>
                    </div>
                    <div class=" ">

                        <img class = "news-image" src = ${posts.image}>
                    </div>
                    </div>


                </li>
    `);
}
export default PostSummaryItem;
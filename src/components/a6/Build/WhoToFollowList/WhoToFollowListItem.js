
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: './java.jpg',
            userName: 'NASA',
            handle: 'NASA'
        }
    }) =>{



    return(
        <>
           <div className="col  mt-2 d-none d-lg-inline-block position-relative me-3 ">
                  <ul className="">
                      <li className="list-group-item ">
                          <span className = "bold-only">Who to follow</span>
                      <li className="list-group-item absolute">
                      <span>
                           <img src = {who.avatarIcon} width = "50px" height = "50px" className = " mt-2 mb-2 "></img>
                      </span>
                          <div className = "display align-top ">
                              <div className="row  ">
                          <span className = "ms-2 bold-only">
                              {who.userName}
                              <i className="fas fa-check-circle align-left"></i>
                          </span>

                              </div>
                              <div className="row  ms-2 gray ">
                                  {who.handle}
                              </div>
                          </div>

                          <button className="btn btn-primary override-bs mt-2 mb-2 ">
                              Follow
                          </button>

                      </li>

                      </li>

                  </ul>

            </div>





    </>

);
}
export default WhoToFollowListItem;





      //  <li>
//            <img src = '${who.avatarIcon}'>
//            (${who.userName})
//            (${who.handle})


const WhoToFollowListItem = (who) => {

    return(`



               <div class="col  mt-2 d-none d-lg-inline-block position-relative me-3 ">
                      <ul class="">
                          <li class="list-group-item ">
                              <span class = "bold-only">Who to follow</span>
                          <li class="list-group-item absolute">
                          <span>
                               <img src = "${who.avatarIcon}" width = "50px" height = "50px" class = " mt-2 mb-2 ">
                          </span>
                              <div class = "display align-top ">
                                  <div class="row  ">
                              <span class = "ms-2 bold-only">
                                  ${who.userName}
                                  <i class="fas fa-check-circle align-left"></i>
                              </span>

                                  </div>
                                  <div class="row  ms-2 gray ">
                                      ${who.handle}
                                  </div>
                              </div>

                              <button class="btn btn-primary override-bs mt-2 mb-2 ">
                                  Follow
                              </button>

                          </li>

                          </li>

                      </ul>

                </div>





        </li>
    `);
}
export default WhoToFollowListItem;






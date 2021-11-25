
import React from "react";
import TweetStats from "./TweetStats";
import {useDispatch} from "react-redux";
import {deleteTweet}
    from "../../services/twitterService";


const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, tweet).then(r => {})
    }
    return(
        <li className="list-group-item">

            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle tiny-image"
                             src={tweet['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={deleteTweetClickHandler}
                           className="fa fa-remove fa-pull-right">Delete</i>

                        <span className="fw-bold">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>
                        <span className="ms-1 text-secondary">{tweet.time}</span>

                        <div>
                            {tweet.tweet}
                        </div>

                        {
                            <span className="ms-1 ">
                                   <img className="" width = "300px"
                                        src={tweet['image']}/>
                            </span>

                        }
                        <TweetStats tweet={tweet}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TweetListItem;
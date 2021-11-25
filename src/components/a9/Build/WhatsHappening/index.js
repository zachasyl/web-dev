import React, {useState} from "react";
import {postNewTweet, fetchAllTweets} from "../../services/twitterService";

import '../rightcol.css';


import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: whatsHappening
        });

    }
    return(
        <>
            <div>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'../../../images/react.png'}
                             className="rounded-circle"
                             style={{width: '20px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>

                        <button onClick={tweetClickHandler} className="btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </div>
        </>
    );
}

export default WhatsHappening;
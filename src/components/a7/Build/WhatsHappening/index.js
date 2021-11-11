import React, {useState} from "react";




import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({
            type: 'create-tweet',
            tweet: whatsHappening
        });
    }
        return(


    <div>
        <button onClick={tweetClickHandler}>
            Tweet
        </button>

    <textarea value={whatsHappening} className = ""

              onChange={(event) =>
                  setWhatsHappening(event.target.value)}>
    </textarea>
    </div>
);
}
export default WhatsHappening;

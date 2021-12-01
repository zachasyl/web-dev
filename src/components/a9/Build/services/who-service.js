const TWEET_API = 'http://localhost:4000/api/tweets';



export const findAllWho = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'find-all-who',
                who
            })
        );
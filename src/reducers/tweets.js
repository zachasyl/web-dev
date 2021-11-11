import posts from '../data/tweets.json';


const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'like-tweet':
            return state.tweets.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
            break;


        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
            break;

        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",

                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },


            };
            return([
                {
                    ...tweet,
                    "tweet": action.tweet
                },
                ...state
            ]);
            break;
        default:
            return(state);
    }
};
export default tweets;
import posts from '../data/tweets.json';

// note that we can change posts to [] and we will get the initial tweets from tweets.json in the web-dev-node
const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(action.tweets);
            break;

        case 'like-tweet':
            return state.map(tweet => {
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
                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                "tweet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "attachments": {
                    "video": "unKvMC3Y1kI"
                },
                "logo-image": "../../../images/react-blue.png",
                "avatar-image": "../../../images/react-blue.png",
                "stats": {
                    "comments": "123",
                    "retweets": "234",
                    "likes": "345"},
                ...action.tweet,



            };
            return ([
                    tweet,

                    ...state,
                ]
            );

            break;
        default:
            return(state);
    }
};
export default tweets;
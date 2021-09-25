const { client } = require("../twitterClient");
const { getTweets } = require("./getTweets");
const { postRetweets } = require("./postRetweets");
const processIncomingTweets = async () => {
  // for(eachTweet of tweets.statuses)
  try {
    const tweets = await getTweets();
    // console.log("here is returned obj", tweets.statuses);
    const tweetIdArray = [];
    for (eachTweet of tweets.statuses) {
      tweetIdArray.push(eachTweet.id_str);
      await postRetweets(eachTweet.id_str);
      console.log("tweeted successfuly", eachTweet.id_str);
    }
    // return tweetIdArray;
  } catch (err) {
    console.log("unsuccesfull in tweeting", eachTweet.id_str);
    console.log(err);
  }
};

module.exports = { processIncomingTweets };

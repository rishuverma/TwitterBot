const { client } = require("../twitterClient");
const { getTweets } = require("./getTweets");
const { postRetweets } = require("./postRetweets");
const { readSinceId } = require("./readSinceId");
const { writeSinceId } = require("./writeSinceId");
const processIncomingTweets = async () => {
  try {
    const since_idObj = await readSinceId();
    console.log("since id here", since_idObj);
    const tweets = await getTweets(since_idObj.since_id);
    // const tweetIdArray = [];
    for (let eachTweet of tweets.statuses) {
      try {
        // tweetIdArray.push(eachTweet.id_str);
        if (eachTweet.id_str != since_idObj.since_id)
          await postRetweets(eachTweet.id_str);
        console.log("tweeted successfuly", eachTweet.id_str);
        since_idObj.since_id = eachTweet.id_str;
      } catch (err) {
        console.log("unsuccessful reweet", eachTweet.id_str);
        console.log(err);
      }
    }
    await writeSinceId(since_idObj);
  } catch (err) {
    console.log("error caught in processTweets", err);
  }
};

module.exports = { processIncomingTweets };

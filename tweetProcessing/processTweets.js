const { client } = require("../twitterClient");
const { getTweets } = require("./getTweets");
const { postRetweets } = require("./postRetweets");
const { readQueryObj } = require("./readQueryObjFromFile");
const { readSinceId } = require("./readSinceId");
const { writeSinceId } = require("./writeSinceId");
const { writeQueryObj } = require("./writeQueryObj");
const processIncomingTweets = async () => {
  try {
    // const since_idObj = await readSinceId();
    const queryObj = await readQueryObj();
    // const clonequeryObj = { ...queryObj };
    // console.log("query object here", queryObj);
    for (let eachQuery of queryObj.queries) {
      // console.log("query right now", eachQuery);
      const tweets = await getTweets(eachQuery);
      // tweets=[...tweets,newTweets.statuses];

      // const tweets = await getTweets();
      // const tweetIdArray = [];
      // console.log("tweets received ", tweets);
      for (let eachTweet of tweets.statuses) {
        try {
          // tweetIdArray.push(eachTweet.id_str);
          if (
            eachTweet.id_str != eachQuery.since_id &&
            !eachTweet.retweeted_status
          ) {
            await postRetweets(eachTweet.id_str);
            console.log("tweeted successfuly", eachTweet.id_str);
            eachQuery.since_id = eachTweet.id_str;
          }
          // console.log("after update query obj", queryObj);
        } catch (err) {
          console.log("unsuccessful reweet", eachTweet.id_str);
          console.log(err);
          eachQuery.since_id = eachTweet.id_str;
        }
      }
      // await writeSinceId(since_idObj);
    }
    await writeQueryObj(queryObj);
  } catch (err) {
    console.log("error caught in processTweets", err);
  }
};

module.exports = { processIncomingTweets };

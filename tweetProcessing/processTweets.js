const { client } = require("../twitterClient");
const { getTweets } = require("./getTweets");
const { postRetweets } = require("./postRetweets");
const { readQueryObj } = require("./readQueryObjFromFile");
const { readSinceId } = require("./readSinceId");
const { writeSinceId } = require("./writeSinceId");
const { writeQueryObj } = require("./writeQueryObj");
const { spamFilter } = require("./spamFilter");
const processIncomingTweets = async () => {
  try {
    // const since_idObj = await readSinceId();
    const queryObj = await readQueryObj();
    for (let eachQuery of queryObj.queries) {
      const tweets = await getTweets(eachQuery);
      for (let eachTweet of tweets.statuses) {
        try {
          if (
            eachTweet.id_str != eachQuery.since_id &&
            // !eachTweet.retweeted_status
            spamFilter(eachTweet)
          ) {
            await postRetweets(eachTweet.id_str);
            console.log("tweeted successfuly", eachTweet.id_str);
            eachQuery.since_id = eachTweet.id_str;
          }
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

const { client } = require("../twitterClient");

const postRetweets = (tweetId) => {
  return new Promise((resolve, reject) => {
    client.post(
      `statuses/retweet/${tweetId}`,
      function (error, tweet, response) {
        if (error) {
          // console.error(error);
          console.log("error in postRetweet");
          return reject(error);
        } else {
          // console.log(response.body);

          console.log("in post retweet", tweetId);
          return resolve(response.body);
        }
      }
    );
  });
};
module.exports = { postRetweets };

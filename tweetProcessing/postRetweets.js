const { client } = require("../twitterClient");

const postRetweets = (tweetId) => {
  return new Promise((resolve, reject) => {
    client.post(
      `statuses/retweet/${tweetId}`,
      function (error, tweet, response) {
        if (error) {
          // console.error(error);
          return reject(error);
        } else {
          // console.log(response.body);
          return resolve(response.body);
        }
      }
    );
  });
};
module.exports = { postRetweets };

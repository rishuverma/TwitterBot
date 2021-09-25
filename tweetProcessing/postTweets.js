const { client } = require("../twitterClient");

const postTweets = () => {
  client.post(
    "statuses/update",
    { status: "I am a tweet by the bot" },
    function (error, tweet, response) {
      if (error) {
        console.error("err in tweeting", error);
      }
      if (!error) {
        console.log(tweet);
      }
      console.log("response", response.body);
    }
  );
};

module.exports = { postTweets };

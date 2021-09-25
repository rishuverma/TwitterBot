const Twitter = require("twitter");
const { envVar } = require("./envvar");

const client = new Twitter({
  consumer_key: envVar.TWITTER_CONSUMER_KEY,
  consumer_secret: envVar.TWITTER_CONSUMER_SECRET,
  access_token_key: envVar.TWITTER_TOKEN_KEY,
  access_token_secret: envVar.TWITTER_TOKEN_SECRET,
});
module.exports = { client };

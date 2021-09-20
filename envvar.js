let envVar = {};
if (process.env.NODE_ENV === "development") {
  console.log("in dev");
  envVar = {
    PORT: process.env.DEV_PORT,
    TWITTER_CONSUMER_KEY: process.env.DEV_TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.DEV_TWITTER_CONSUMER_SECRET,
    TWITTER_TOKEN_KEY: process.env.DEV_TWITTER_TOKEN_KEY,
    TWITTER_TOKEN_SECRET: process.env.DEV_TWITTER_TOKEN_SECRET,
  };
} else if (process.env.NODE_ENV === "production") {
  console.log("in prod");
  envVar = {
    PORT: process.env.PROD_PORT,
    TWITTER_CONSUMER_KEY: process.env.PROD_TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.PROD_TWITTER_CONSUMER_SECRET,
    TWITTER_TOKEN_KEY: process.env.PROD_TWITTER_TOKEN_KEY,
    TWITTER_TOKEN_SECRET: process.env.PROD_TWITTER_TOKEN_SECRET,
  };
}
module.exports = { envVar };

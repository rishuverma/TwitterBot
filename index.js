const express = require("express");
const dotenv = require("dotenv").config();
const { envVar } = require("./envvar");
const Twitter = require("twitter");
const app = express();

const client = new Twitter({
  consumer_key: envVar.TWITTER_CONSUMER_KEY,
  consumer_secret: envVar.TWITTER_CONSUMER_SECRET,
  access_token_key: envVar.TWITTER_TOKEN_KEY,
  access_token_secret: envVar.TWITTER_TOKEN_SECRET,
});
client.get(
  "search/tweets",
  { q: "#codefor30days" },
  function (err, tweets, response) {
    if (err) {
      console.error(err);
    }
    console.log("here are those tweets", tweets);
  }
);
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

app.use("/", async (req, res) => {
  try {
    res.send({ message: "got into it" });
  } catch (err) {
    console.log(err);
  }
});
app.listen(envVar.PORT, () => {
  console.log(`app started at port ${envVar.PORT}`);
});

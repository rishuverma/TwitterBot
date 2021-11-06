const dotenv = require("dotenv").config();
const { envVar } = require("./envvar");
const express = require("express");

const { client } = require("./twitterClient");
const { getTweets } = require("./tweetProcessing/getTweets");
const { postTweets } = require("./tweetProcessing/postTweets");
const { postRetweets } = require("./tweetProcessing/postRetweets");
const { processIncomingTweets } = require("./tweetProcessing/processTweets");

const app = express();

setInterval(processIncomingTweets, 5 * 60 * 1000);

app.get("/", async (req, res) => {
  try {
    res.json({ status: 200 });
  } catch {
    console.error("app not started");
  }
});

app.listen(envVar.PORT);

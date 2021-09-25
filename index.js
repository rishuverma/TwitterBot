const express = require("express");
const dotenv = require("dotenv").config();
const { envVar } = require("./envvar");
// const Twitter = require("twitter");
const app = express();

const { client } = require("./twitterClient");
const { getTweets } = require("./tweetProcessing/getTweets");
const { postTweets } = require("./tweetProcessing/postTweets");
const { postRetweets } = require("./tweetProcessing/postRetweets");
const { processIncomingTweets } = require("./tweetProcessing/processTweets");
// getTweets();
// console.log("get tweet console", getTweets());
processIncomingTweets();
// const latestSinceId = Number.POSITIVE_INFINITY;
// processIncomingTweets();
// app.use("/", async (req, res) => {
//   try {
//     res.send({ message: "got into it" });
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(envVar.PORT, () => {
  console.log(`app started at port ${envVar.PORT}`);
});

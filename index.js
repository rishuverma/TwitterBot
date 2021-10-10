const dotenv = require("dotenv").config();
const { envVar } = require("./envvar");
// const Twitter = require("twitter");

const { client } = require("./twitterClient");
const { getTweets } = require("./tweetProcessing/getTweets");
const { postTweets } = require("./tweetProcessing/postTweets");
const { postRetweets } = require("./tweetProcessing/postRetweets");
const { processIncomingTweets } = require("./tweetProcessing/processTweets");
// processIncomingTweets();

setTimeout(processIncomingTweets, 20000);

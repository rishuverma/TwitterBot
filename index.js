const dotenv = require("dotenv").config();
const { envVar } = require("./envvar");

const { client } = require("./twitterClient");
const { getTweets } = require("./tweetProcessing/getTweets");
const { postTweets } = require("./tweetProcessing/postTweets");
const { postRetweets } = require("./tweetProcessing/postRetweets");
const { processIncomingTweets } = require("./tweetProcessing/processTweets");

setInterval(processIncomingTweets, 20000);

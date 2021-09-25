const { client } = require("../twitterClient");
// const getTweets = (latestSinceId) => {
//   const query = {
//     q: "#codefor30days",
//     result_type: "recent",
//     since_id: latestSinceId,
//     count: 100,
//   };
//   const functionParam = (err, tweets, response) => {
//     console.log("in the function");
//     if (err) {
//       console.error(err);
//     }
//     // console.log("here are those tweets", tweets);
//     tweetObject = response.body;
//     console.log("in gettweet", response.body);
//     return tweetObject;
//   };

//   let tweetObject = {};
//   client.get("search/tweets", query, functionParam);
//   console.log("hey", tweetObject);
// };

function getTweets(latestSinceId) {
  return new Promise((resolve, reject) => {
    const query = {
      q: "#codefor30days",
      result_type: "recent",
      since_id: latestSinceId,
      count: 100,
    };

    client.get("search/tweets", query, (err, tweets, response) => {
      // console.log("in the function");
      if (err) {
        return reject(err);
      }
      // console.log("here are those tweets", response.body);

      return resolve(tweets);
    });
  });
}
module.exports = { getTweets };

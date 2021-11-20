const { client } = require("../twitterClient");

const followUser = (userId) => {
  return new Promise((resolve, reject) => {
    client.post(
      `friendships/create.json?user_id=${userId}&follow=true`,
      (err, tweet, response) => {
        if (err) {
          console.log("error while following the user");
          return reject(err);
        } else {
          return resolve(JSON.parse(response.body));
        }
      }
    );
  });
};
module.exports = { followUser };

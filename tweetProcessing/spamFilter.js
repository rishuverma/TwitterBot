const spamFilter = async (tweet) => {
  try {
    if (await tweet.retweeted_status) return false;
    if ((await tweet.text.trim().split(" ").length) < 5) return false;
    if ((await tweet.entities.hashtags.length) > 4) return false;
    if (!/d(?:ays?)?\W*(\d+)/gi.test(tweet.text)) return false;
    return true;
  } catch (err) {
    console.log("error in spamFilter function/n", err);
    return false;
  }
};

module.exports = { spamFilter };

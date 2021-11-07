const spamFilter = async (tweet) => {
  if (tweet.retweeted_status) return false;
  if (tweet.text.trim().split(" ").length < 5) return false;
  if (tweet.entities.hashtags.length > 4) return false;
  if (!/d(?:ays?)?\W*(\d+)/gi.test(tweet.text)) return false;
  return true;
};

module.exports = { spamFilter };

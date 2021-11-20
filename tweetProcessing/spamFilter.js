const spamFilter = async (tweet) => {
  try {
    // if (await tweet.retweeted_status) return false;
    // if ((await tweet.text.trim().split(" ").length) < 5) return false;
    // if ((await tweet.entities.hashtags.length) > 4) return false;
    // if (!/d(?:ays?)?\W*(\d+)/gi.test(tweet.text)) return false;
    // return true;

    /*
    
    Please use tweet mode : extended for twitter api to get full response else it will provide 
    truncated response where one can't implement spam filter 
    */

    if (
      !tweet.retweeted_status &&
      tweet.full_text.trim().split(" ").length > 4 &&
      tweet.entities.hashtags.length < 6 &&
      /d(?:ays?)?\W*(\d+)/gi.test(tweet.full_text)
    ) {
      // console.log(
      //   !tweet.retweeted_status,
      //   tweet.full_text.trim().split(" ").length,
      //   "  ",
      //   tweet.entities.hashtags.length,
      //   " ",
      //   tweet.entities.hashtags,
      //   " ",
      //   tweet.full_text
      // );
      return true;
    }

    return false;
  } catch (err) {
    console.log("error in spamFilter function/n", err);
    return false;
  }
};

module.exports = { spamFilter };

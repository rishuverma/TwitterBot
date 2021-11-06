const fs = require("fs");
const path = require("path");
const queriesPath = path.join(__dirname, "queries.json");

const writeQueryObj = async (queryObj) => {
  console.log("writing", queryObj);
  fs.writeFileSync(queriesPath, JSON.stringify(queryObj));
};
module.exports = { writeQueryObj };

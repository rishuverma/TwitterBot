const fs = require("fs");
const path = require("path");
const queriesPath = path.join(__dirname, "queries.json");

const readQueryObj = async () => {
  const queryObj = fs.readFileSync(queriesPath);
  return JSON.parse(queryObj.toString());
};
module.exports = { readQueryObj };

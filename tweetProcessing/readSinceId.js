const fs = require("fs");
const path = require("path");
const sinceIdPath = path.join(__dirname, "sinceId.json");

const readSinceId = async () => {
  const since_idObj = fs.readFileSync(sinceIdPath);
  return JSON.parse(since_idObj.toString());
};
module.exports = { readSinceId };

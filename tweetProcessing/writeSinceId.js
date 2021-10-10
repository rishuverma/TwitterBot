const fs = require("fs");
const path = require("path");
const sinceIdPath = path.join(__dirname, "sinceId.json");

const writeSinceId = async (since_idObj) => {
  console.log("writing", since_idObj);
  fs.writeFileSync(sinceIdPath, JSON.stringify(since_idObj));
};
module.exports = { writeSinceId };

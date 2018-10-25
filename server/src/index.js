const express = require("express");
const router = require("./routes");
const { join } = require("path");

const indexHtml = join(__dirname, "../public/index.html");

module.exports = express()
  .use("/api", router)
  .use(express.static("public"))
  .get("*", (req, res) => { res.sendFile(indexHtml); })

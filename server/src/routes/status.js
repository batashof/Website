const { Status } = require("../models");
const { Router } = require("express");

const index = async (req, res) => {
  const status = await Status.findOne()

  res.json({
    status: "ok",
    database: status.value
  });
};

module.exports = Router()
  .get("/", index);

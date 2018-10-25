const { Router } = require("express");
const statusRoutes = require("./status");
const caseStudiesRoutes = require("./case-studies");
const industryRoutes = require("./industry");
const newsRoutes = require("./news");
const jobsRoutes = require("./jobs");
const sendMailRoutes = require("./send-mail");
const technologiesRoutes = require("./technologies");

module.exports = Router()
  .use("/status", statusRoutes)
  .use("/case-studies", caseStudiesRoutes)
  .use("/industries", industryRoutes)
  .use("/news", newsRoutes)
  .use("/jobs", jobsRoutes)
  .use("/send-mail", sendMailRoutes)
  .use("/software-development", technologiesRoutes)

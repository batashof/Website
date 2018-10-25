const { Router } = require("express");
const { Job, Manager } = require("../models");

const jobSummary = (job, extended = false) => {
  const result = {
    url: job.url,
    position: job.position,
    location: job.location,
    spoiler: job.spoiler
  };

  if (extended) {
    result.division = job.division;
    result.content = job.content;
    result.managers = job.Managers.map(manager => {
      const { name, position, photo, tel, skype, address, mail } = manager;
      return {
        name,
        position,
        photo,
        tel,
        skype,
        mail,
        address
      };
    });
  }

  return result;
};

// GET /jobs
const index = (req, res) => {
  const pageSize = Number(req.query.page_size);
  const page = Number(req.query.page);
  const location = req.query.location;
  const division = req.query.division;
  const featured = req.query.featured;
  let items;

  return Job.findAll({})
    .then(models => {
      if (location) {
        models = models.filter(model => model.location === location);
      }
      if (division) {
        models = models.filter(model => model.division === division);
      }
      if (featured) {
        models = models.filter(model => model.hot);
      }
      
      items = models.length;
      let result = page
        ? models.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
        : models;
      return result.map(model => jobSummary(model));
    })
    .then(jobs =>
      res.json({
        meta: {
          items,
          page,
          pages: Math.ceil(items / pageSize),
          pageSize
        },
        jobs: jobs
      })
    );
};

// GET /jobs/:id
const read = (req, res) => {
  let url = req.params.id;

  return Job.findOne({
    where: { url: url },
    include: [Manager]
  })
    .then(job => res.json({ job: jobSummary(job, true) }))
    .catch(err => {
      res.sendStatus(404);
    });
};

module.exports = Router()
  .get("/", index)
  .get("/:id", read);

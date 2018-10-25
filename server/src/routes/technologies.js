const { Router } = require("express");
const {
  CaseStudy,
  Industry,
  Technology,
  Service,
  Model
} = require("../models");

const getTitle = model => model.title;

const technologySummary = technology => {
  let result = {
    title: technology.title,
    tag: technology.tag,
    pageTitle: technology.pageTitle,
    technologiesList: technology.technologiesList,
    pageSpoiler: technology.pageSpoiler,
  };

  return result;
};

const index = (req, res) => {
  let url = req.params.id;
  return (
    Technology.findAll()
      .then(models => {
        return models.map(item => technologySummary(item));
      })
      .then(technology => res.json({ technology: technology }))
      .catch(err => {
        res.sendStatus(404);
      })
  );
};

const read = (req, res) => {
  let url = req.params.id;

  return Technology.findOne({
    where: { tag: url },
    include: [{model:CaseStudy,
      include:[Industry, Service, Model, Technology]
    }]
  })
    .then(technology =>  res.json({ technology: technologySummary(technology) }))
    .catch(err => {
      res.sendStatus(404);
    });
};

module.exports = Router()
  .get("/", index)
  .get("/:id", read);

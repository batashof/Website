const { Router } = require('express');
const {
  CaseStudy,
  Industry,
  Technology,
  Service,
  Model,
  Quote
} = require('../models');

const getTitle = model => model.title;

const caseStudySummary = (caseStudy, extended = false) => {
  let quotes = caseStudy.Quotes;
  let feature;

  if (quotes.length > 0) {
    feature = quotes[Math.floor(Math.random() * quotes.length)].text;
  }

  const result = {
    id: caseStudy.tag,
    title: caseStudy.title,
    onHomePage: caseStudy.onHomePage,
    logo: caseStudy.logo,
    feature,
    engagementDetails: {
      sectors: caseStudy.Industries.map(getTitle),
      technologies: caseStudy.Technologies.map(getTitle),
      services: caseStudy.Services.map(getTitle),
      model: caseStudy.Models.map(getTitle),
      duration: caseStudy.duration
    },
    photo: caseStudy.photo,
    bannerFilter: caseStudy.bannerFilter,
  };

  const { videoId, videoPreview, videoBackground } = caseStudy;

  if (videoId || videoPreview || videoBackground) {
    result.video = {
      videoID: videoId,
    };
  }

  if (extended) {
    result.agents = caseStudy.agents;
    result.caseStudy = caseStudy.caseStudy;
    result.description = caseStudy.description;
    result.engagementDescription = caseStudy.engagementDescription;
  }

  return result;
};

const hasIntersections = (left, right) => {
  for (let value of left) {
    if (right.includes(value)) {
      return true;
    }
  }

  return false;
};

const nonBlank = value => value !== null && value !== undefined;

const includes = (relations, model) => {
  return Object.keys(relations)
    .map(key => {
      const queryRelation = relations[key].filter(nonBlank);
      const modelRelation = model[key].map(value => value.tag).filter(nonBlank);
      if (queryRelation.length === 0) { return true; }

      return hasIntersections(queryRelation, modelRelation);
    })
    .reduce((prev, next) => prev && next, true);
};

// GET /case-studies
const index = (req, res) => {
  const Industries = [].concat(req.query.industry);
  const Technologies = [].concat(req.query.technology);

  return CaseStudy.findAll({ include: [Industry, Technology, Service, Model, Quote] })
    .then(models => {
      return models
        .filter(model => includes({ Industries, Technologies }, model))
        .map(caseStudySummary);
    })
    .then(caseStudies => res.json({ "case-studies": caseStudies }));
};

// GET /case-studies/:id
const read = (req, res) => {
  const { id } = req.params;

  CaseStudy.findOne({
    where: { tag: id },
    include: [Industry, Technology, Service, Model, Quote]
  })
    .then(model => {
      res.json({ 'case-study': caseStudySummary(model, true) });
    })
    .catch(err => {
      res.sendStatus(404);
    });
};

module.exports = Router()
  .get('/', index)
  .get('/:id', read);

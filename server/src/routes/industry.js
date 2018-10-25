const { Router } = require('express');
const { Industry, CaseStudy, Technology } = require('../models');

const index = (req, res) => {
  const { id } = req.params;

  Industry.findOne({
    where: { tag: id },
    include: [CaseStudy]
  })
    .then(model => {
      const json = model.toJSON();
      const result = {
        industry: {
          id: json.tag,
          title: json.title
        }
      };
      res.json(result);
    })
    .catch(err => {
      res.sendStatus(404);
    });
};

module.exports = Router().get('/:id', index);

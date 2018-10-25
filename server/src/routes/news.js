const { Router } = require("express");
const { NewsItem } = require("../models");
const defineUrl = require("../services/define-url.js");

const newsItemSummary = (newsItem, extended = false) => {
  const result = {
    id: newsItem.id,
    title: newsItem.title,
    date: newsItem.publishedAt,
    spoiler: newsItem.spoiler,
    coverImage: newsItem.coverImage,
    spoilerImage: newsItem.spoilerImage
  };

  if (extended) {
    result.content = newsItem.content;
  }
  return result;
};

const index = (req, res) => {
  const search = req.query.search;
  const pageSize = +req.query.page_size;
  const page = +req.query.page;

  let items;
  return NewsItem.findAll()
    .then(models => {
      if (search) {
        models = models.filter(
          model =>
            model.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            model.content.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      }
      items = models.length;
      let result = page
        ? models.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
        : models;

      return result.map(item => newsItemSummary(item));
    })
    .then(news =>
      res.json({
        meta: {
          items,
          page,
          pages: Math.ceil(items / pageSize),
          pageSize
        },

        news: news
      })
    );
};

const news = (req, res) => {
  let fullUrl = req.params.id;
  url = new Date(fullUrl.split("--")[0]);

  return NewsItem.findAll({
    order: [["publishedAt", "DESC"]]
  })
    .then(news => {
      const newsUrls = news.map(entry => defineUrl(entry));
      const index = newsUrls.indexOf(fullUrl);
      const nextUrl = newsUrls[index - 1];
      const prevUrl = newsUrls[index + 1];
      const entry = news[index];

      res.json({
        "news-item": newsItemSummary(entry, true),
        meta: {
          next: nextUrl || false,
          prev: prevUrl || false
        }
      });
    })
    .catch(err => {
      res.sendStatus(404);
    });
};

module.exports = Router()
  .get("/", index)
  .get("/:id", news);

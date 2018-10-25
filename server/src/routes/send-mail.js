const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();

const multer = require('multer');
const mailer = require('../services/mailer');

const send = (req, res) => {
  
  const sender = 'g7qyxaspmypyue2z@ethereal.email';
  const addressee = req.body.addressee;
  const action = req.body.action;

  mailer.sendMail(action, sender, addressee, req.body, req.file);
  res.send('ok');
};

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single('upload');

module.exports = app.post('/', upload, send);
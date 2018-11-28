'use strict';
import express from 'express';
const app = express();
const router = new express.Router();
const serverError = require('../error/error.js');

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/', (req, res, next) => {
  res.send('Hello').catch(serverError);
});

router.post('/save', (req, res, next) => {
  let record = req.body;
  record
    .save()
    .then(data => sendJSON(res, data))
    .catch(serverError);
});

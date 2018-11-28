import express from 'express';
import cors from 'cors';
import route from './api/api.js';
const routeError = require('./middleware/404.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routeError);
app.use(route);

let server = false;

module.exports = {
  app,
  start: port => {
    if (!server) {
      server = app.listen(port, err => {
        if (err) {
          throw err;
        }
        console.log(`Server up on ${port}`);
      });
    } else {
      console.log(`Server is already running`);
    }
  },
  stop: () => {
    server.close(() => {
      console.log(`Server has been stopped`);
    });
  }
};

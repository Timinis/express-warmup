'use strict';

module.exports = (req, res) => {
  console.log('Not a registed route');
  res.status(404);
  res.send('Not a valid path');
};

const apiHandler = require('./api-handler');

// eslint-disable-next-line no-unused-vars
module.exports = (app, opts) => {
  app.post('/books', (req, res) => {
    apiHandler
      .postBook(req)
      .then((response) => {
        res.status(response.status).json(response.payload);
      })
      .catch((status, response) => {
        res.status(response.status).json(response.payload);
      });
  });
};

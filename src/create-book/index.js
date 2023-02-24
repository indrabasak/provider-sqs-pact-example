// Require and init API router module
const app = require('lambda-api')();

// Add CORS Middleware
app.use((req, res, next) => {
  // Add default CORS headers for every request
  res.cors();

  // Call next to continue processing
  next();
});

// register routes
app.register(require('./v1/routes'), { prefix: '/example/v1' });

// log out routes
app.routes(true);

// ----------------------------------------------------------------------------//
// Main router handler
// ----------------------------------------------------------------------------//
module.exports.handler = (event, context, callback) => {
  // !!!IMPORTANT: Set this flag to false, otherwise the lambda function
  // won't quit until all DB connections are closed, which is not good
  // if you want to freeze and reuse these connections
  context.callbackWaitsForEmptyEventLoop = false;

  // Run the request
  app.run(event, context, callback);
};

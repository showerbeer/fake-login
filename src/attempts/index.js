const AttemptsController = require('./controller');
const AttemptsService = require('./service');


function asyncHandler(routeHandler) {
  return async function (req, res, next) {
    try {
      await routeHandler(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}

module.exports.init = (server, configs, database) => {
  const service = new AttemptsService(database);
  const controller = new AttemptsController(configs, service);

  server.get('/login/attempts', asyncHandler(controller.getAttempts.bind(controller)));
  server.post('/login', asyncHandler(controller.createAttempt.bind(controller)));
}
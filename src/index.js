const configs = require("./config");
const database = require('./database');
const server = require('./server');

// Catch unhandled unexpected exceptions
process.on('uncaughtException', (error) => {
  console.error(`uncaughtException ${error.message}`);
});

// Catch unhandled rejected promises
process.on('unhandledRejection', (reason) => {
  console.error(`unhandledRejection ${reason}`);
});

const db = database.init(configs.database);
const appServer = server.init(configs.server, db);
appServer.listen(configs.server.port, () => {
  console.log('Server running at:', configs.server.port);
});
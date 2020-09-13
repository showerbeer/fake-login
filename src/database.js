const mysql = require('mysql2/promise');

module.exports.init = (config) => mysql.createPool(config);
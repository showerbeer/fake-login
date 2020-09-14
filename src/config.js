require('dotenv').config();

const server = {
    port: 5090,
    pageSize: 100,
    logger: {
        format: `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]`
    }
};

const database = {
  host: process.env.MARIA_DB_HOST,
  user: process.env.MARIA_DB_USER,
  password: process.env.MARIA_DB_PASS,
  database: process.env.MARIA_DB_NAME,
  connectionLimit: 10,
  port: process.env.MARIA_DB_PORT,
};

module.exports = {
  server,
  database
}
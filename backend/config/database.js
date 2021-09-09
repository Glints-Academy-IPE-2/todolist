const Sequelize = require("sequelize");

const db = new Sequelize("db_zeal", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

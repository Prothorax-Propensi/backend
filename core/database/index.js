const mysql = require("mysql2/promise");

const config = {
  host: "156.67.216.68",
  user: "root",
  password: "propen-adji",
  database: "master",
  waitForConnections: true,
};

const database = {
  async query(query, args) {
    let res = 1;
    try {
      const pool = mysql.createPool(config);
      res = await pool.query(query, args);
      await pool.end()
    } catch (error) {
      console.error(error);
      return null;
    }
    return res;
  },
};

module.exports = database;

const db = require("../../core/database");

const UserRepository = {
  async autenticate(email) {
    const [rows] = await db.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },
  async getUser() {},
  async createUser() {},
  async deleteUser() {},
};

module.exports = UserRepository;

const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user.repository");

const UserService = {
  async autenticate(req, res) {
    const { email, password } = req.body;
    const user = await UserRepository.autenticate(email);

    const passwordIsValid = password === user.password;
    if (!passwordIsValid) {
      return res.status(401).json({ status: 401, message: "Invalid Password" });
    }

    if (!user) {
      res.status(404).json({
        status: 404,
        message: "Maaf user belum terdaftar",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.username
      },
      "BACKEND",
      {
        expiresIn: 86400, // expires in 24 hours
      }
    );

    res.status(200).json({ token: token, user: user });
  },
  async createUser(req, res) {
    res.status(200).json({ adji: "adji" });
  },
  async updateUser(req, res) {},
  async getUser(req, res) {
    // res.status(200).json({'adji': 'adji'})
  },
  async deleteUser(req, res) {},
};

module.exports = UserService;

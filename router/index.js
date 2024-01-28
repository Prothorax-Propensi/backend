const express = require("express");
const router = express.Router();
const { wrap } = require("../core/error/error-handler");

/**
 * Import Services
 * used for importing service functions
 */
const UserService = require('../app/service/user.service')


/**
 * [Domain] Base
 */
router.get("/", (req, res) => {
  return res.send("Server Is Healty");
});
router.post('/login', wrap(UserService.autenticate))

/**
 * [Domain] User
 */

// List User
router.get("/user", (req, res) => {
  res.status(200).json({ nama: "user" });
});

// Create User
router.post("/user", wrap(UserService.autenticate))



module.exports = router;

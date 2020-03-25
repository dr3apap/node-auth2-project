const express = require("express");
const db = require("../data/dbConfig");
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
router.post("/", (req, res) => {
  const authError = { message: "Invalid credentials" };
  const { username, password } = req.body;
  Users.findBy({ username })
    .then(([user]) => {
      if (!user) {
        res.status(401).json(authError);
      }
      if (!username && !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json(authError);
      }
      const payload = {
        userId: user.id,
        userRole: "normal", // this usually come from the database
      };
      const token = jwt.sign(
        payload,
        "keep it secret, keep it secure and safe",
      );
      res
        .status(201)
        .json({ message: `Welcome ${user.username}!`, token: token });
    })
    .catch(error => {
      res.status(401).json({ message: "Credentials required" });
    });
});

module.exports = router;

// function generateJwt() {
//   token = {
//     payload: {
//       secret,
//     },
//   };

//   return jwt.verify(payload, secret, signature);
// }

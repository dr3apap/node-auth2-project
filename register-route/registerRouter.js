const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../data/dbConfig");
const Users = require("../users/users-model");

const router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;
  const psswdHashed = bcrypt.hashSync(user.password, 10);
  user.password = psswdHashed;

  Users.add(user).then(user => {
    res
      .status(201)
      .json({ message: "Account created successfully", user: user });
  });
  console.log(req.body);
});

module.exports = router;

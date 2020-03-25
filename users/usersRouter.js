const express = require("express");
const Users = require("./users-model");
const db = require("../data/dbConfig");

const router = express.Router();
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

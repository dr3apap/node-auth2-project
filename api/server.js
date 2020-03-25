const express = require("express");
const helmet = require("helmet");
const registerRouter = require("../register-route/registerRouter");
const restrict = require("../middleware/restrict");
const usersRouter = require("../users/usersRouter");
const loginRouter = require("../login/loginRouter");

const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

server.use("/", (req, res) => {
  res.send(`<h1>It's all about Token and not Cookie</h1>`);
});

module.exports = server;

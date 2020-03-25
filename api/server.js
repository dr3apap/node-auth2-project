const express = require("express");
const helmet = require("helmet");
const registerRouter = require("../register-route/registerRouter");
const loginRouter = require("../login/loginRouter");

const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);

server.use("/", (req, res) => {
  res.send(`<h1>It's all about Token and not Cookie</h1>`);
});

module.exports = server;

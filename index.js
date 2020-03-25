const server = require("./api/server");

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`\n***Server's live on http:localhost:${port}***\n`);
});

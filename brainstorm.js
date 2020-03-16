const http = require("martin-http");

const server = http.createServer();

server.on("request", client => {
  client.respondText("Error!!!");
  client.respondStatus(400);
});

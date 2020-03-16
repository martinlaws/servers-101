const http = require("http");

const kanyePage = `
  <h1>YEEZY</h1>
  <img src="https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif"/>
`;

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.statusCode = 403;

    response.end(
      "You should not be sending these types of requests! Naughty client!"
    );
  } else if (request.url === "/kanye") {
    response.statusCode = 200;
    response.end(kanyePage);
  } else if (request.url === "/taylor") {
    response.statusCode = 301;
    response.end(
      "<p>Yo, Taylor, I’m really happy for you, I’mma let you finish. But Beyoncé had one of the best videos of all time.</p>"
    );
  } else if (request.url === "/teapot") {
    response.statusCode = 418;
    response.end("I am a little teapot");
  } else {
    response.statusCode = 404;
    response.end("404 error there is nothing here");
  }
});

server.listen(1234, () => {
  console.log("listening on port 1234");
});

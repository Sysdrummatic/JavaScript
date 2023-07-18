const http = require("http");
const host = `localhost`;
const port = 8000;
const fs = require("fs").promises;

const books = JSON.stringify([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Catcher in the Rye", author: "J. D. Salinger" },
  { title: "The Grapes of Wrath", author: "John Steinbeck" },
]);

const author = JSON.stringify([
  {
    name: "F. Scott Fitzgerald",
    born: "September 24, 1896",
    died: "December 21, 1940",
  },
  { name: "J. D. Salinger", born: "January 1, 1919", died: "January 27, 2010" },
  {
    name: "John Steinbeck",
    born: "February 27, 1902",
    died: "December 20, 1968",
  },
]);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
      // res.writeHead(200);
      // res.end();
      fs.readFile(__dirname + "/index.html")
        .then((contents) => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err);
          return;
        });
      break;
    case "/books":
      res.writeHead(200);
      res.end(books);
      break;
    case "/author":
      res.writeHead(200);

      res.end(author);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not found" }));
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

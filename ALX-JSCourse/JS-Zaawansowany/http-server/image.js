const http = require("http");
const host = `localhost`;
const port = 8000;

const fs = require("fs").promises;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/image.gif")
    .then((contents) => {
      res.setHeader("Content-Type", "image/gif");
      res.setHeader("Content-Disposition", "attachment; filename=image.gif");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

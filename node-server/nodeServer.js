const http = require("http");
const PORT = 8000;
const HOST = "localhost";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunks) => {
      body += chunks;
    });
    req.on("close", () => {
      console.log(body);
    });
    res.writeHead(201);
    res.end("ok");
  } else {
    res.writeHead(200);
    res.end("server is good");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`server is running at ${HOST}:${PORT}`);
});

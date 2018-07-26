const handlers = require("./handlers");
const data = require("./data");

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    handlers.staticHandler(response, "Public/index.html");
  }

  else if (url.indexOf("Public") !== -1) {
    handlers.staticHandler(response, url);
  } else if (url.indexOf("src/data") !== -1) {
    response.writeHead(200, {"content-type": "application/json"});
    var stringedData = JSON.stringify(data);
    response.end(stringedData);
  } else {
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("404 error");
  }
};

module.exports = router;

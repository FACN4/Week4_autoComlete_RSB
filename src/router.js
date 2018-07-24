const handlers = require("./handlers");

const router = (request, response) => {
  const url = request.url;

  if (url === "/") {
    handlers.staticHandler(response, "Public/index.html");
  }
  //  else if (url.indexOf("suggest") !== -1) {
  //   console.log("suggest router reached");
  //   handlers.suggestHandler(response, url);
  // } else if (url.indexOf("search") !== -1) {
  //   console.log("search router reached");
  //   handlers.searchHandler(response, url);
  //}
  else if (url.indexOf("Public") !== -1) {
    handlers.staticHandler(response, url);
  } else {
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("404 error");
  }
};

module.exports = router;

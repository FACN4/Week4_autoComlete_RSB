const fs = require("fs");
const path = require("path");

const staticHandler = (response, filepath) => {
  const extension = filepath.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    svg: "image/svg+xml"
  };
  fs.readFile(path.join(__dirname, "..", filepath), "utf8", (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "content-type": "text/plain" });
      response.end("server error");
    } else {
      response.writeHead(200, { "content-type": extensionType[extension] });
      response.end(file);
    }
  });
};

module.exports = {
  staticHandler
};

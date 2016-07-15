var http = require("http");

var options = {
  hostname: "eloquentjavascript.net",
  port: 80,
  method: "GET",
  path: "/author",
  headers: {
   Accept: "text/plain"
  }
};

var responseFunc = function(response) {
  response.on("data", function(chunk) {
    process.stdout.write(chunk.toString());
  });
};

var doRequest = function(){
  var request = http.request(options, responseFunc);
  request.end();
};

doRequest();

options.headers = {
  Accept: "text/html"
};

doRequest();

options.headers = {
  Accept: "application/json"
}

doRequest();

options.headers = {
  Accept: "application/rainbows+unicorns"
}

doRequest();

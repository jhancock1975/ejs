var http = require("http");

var options = {
  hostname: "eloquentjavascript.net",
  port: 80,
  method: "GET",
  path: "/author",
  headers: {
   'Content-Type': 'text/plain',
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
  'Content-Type': 'text/html',
  Accept: "text/html"
};

doRequest();

options.headers = {
  'Content-Type': 'application/json',
  Accept: "application/json"
}

doRequest();

options.headers = {
  'Content-Type': 'application/rainbows+unicorns',
  Accept: "application/json"
}

doRequest();

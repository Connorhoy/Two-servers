// Two-Servers Application Code

// Requires HTTP package.
var http = require("http");
// Setups up both ports neccesarry for the application.
var PORT = 7000;
var PORT = 7500;

function handleRequest(request, response) {
	if PORT = 7000 {
		response.end("You are the greatest! " + request.url);
	}
	else {
		response.end("You are not the greatest, or even good. In fact, you suck nerd.")
	}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
})

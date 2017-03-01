// Two-Servers Application Code

// Requires HTTP package.
var http = require("http");
// Setups up both ports neccesarry for the application.
var PORT = 7000;
var PORT2 = 7500;


var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2)



function handleRequest(request, response) {
	response.end("You are the greatest! " + request.url);
}

function handleRequest2(request, response) {
	response.end("You are not the greatest, you are not even good. In fact, you are the worst. Suck it nerd. " + request.url);
}

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});


server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:%s", PORT2);
});
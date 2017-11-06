/*
Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.
*/

const http = require('http');
const url = require('url');
const port = process.argv[2];

// Create JSON server
const server = http.createServer((request, response) => {
    
    let parsedURL = url.parse(request.url, true);
    let data = routes[parsedURL.pathname];
    let dateObj = new Date(parsedURL.query.iso);
    
    // Check if route exists
    if(data) {

        // If yes, create data from parsedURL;
        let result = data(dateObj);
        response.writeHead(200, { "Content-Type": "application/json"});
        response.end(JSON.stringify(result));
    }
    else {
        // If not, return 404
        response.writeHead(404);
        response.end();
    }
    
});

// Create routes
const routes = {
    // First route
    "/api/parsetime": (dateObj) => {
        
        let resultObj = {
            "hour": dateObj.getHours(),
            "minute": dateObj.getMinutes(),
            "second": dateObj.getSeconds()
        };
        
        return resultObj;
    },
    // Second route
    "/api/unixtime": (dateObj) => {

        let resultObj = {
            "unixtime": dateObj.getTime()
        };

        return resultObj;
    }
}

// Listen to port
server.listen(port);


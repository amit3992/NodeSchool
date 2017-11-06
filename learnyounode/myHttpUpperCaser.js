const http = require('http');
const port = process.argv[2];
const map = require('through2-map');

const server = http.createServer((request, response) => {
    if(request.method == "POST") {
        // Convert to upper case
        let upperCase = request.pipe(toUpperCase);

        // Pipe to response
        upperCase.pipe(response);
    }
});

server.listen(port);

toUpperCase = map((data) => {
    return data.toString().toUpperCase();
});
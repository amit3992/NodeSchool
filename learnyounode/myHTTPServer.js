const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((request, response) => {
    
    // create read stream from the file location;
    let readStream = fs.createReadStream(fileLocation);
    
    // Pipe contents of readStream in response
    readStream.pipe(response);
});

server.listen(port);


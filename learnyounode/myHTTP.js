const http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
	
	var body = "";
	response.setEncoding("utf8");
	response.on("error", console.error)
	response.on("data", (chunk) => {	
		console.log(chunk);
	});

	/*
	response.on("end", () => {
		console.log(body);
	});
	*/

});
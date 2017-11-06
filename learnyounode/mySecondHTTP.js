const http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
	
	var body = "";
	var chars = 0;
	
	response.setEncoding("utf8");
	
	response.on("error", console.error)
	
	response.on("data", (chunk) => {	
		body += chunk;

		var list = chunk.split('');
		chars += list.length;
	});

	response.on("end", () => {
		console.log(chars);
		console.log(body);
	});
	

});
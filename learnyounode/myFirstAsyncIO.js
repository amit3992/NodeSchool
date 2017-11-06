/*
 To perform a filesystem operation you are going to need the fs module from
 the Node core library. To load this kind of module, or any other "global"
 module, use the following incantation:

    var fs = require('fs')

 Now you have the full fs module available in a variable named fs.
*/

const fs = require('fs');
var path = process.argv[2];

/* Alternatively, I can add 'utf-8' as 2nd parameter to get data as String instead of a buffer */
fs.readFile(path, (error, data) => {
	if(error) {
		return console.log(error);
	}
	else {

		// Data is the buffer returned
		var str = data.toString();
		var list = str.split('\n');

		console.log(list.length - 1);

	}
});




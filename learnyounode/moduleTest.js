var path = process.argv[2];
var ext = process.argv[3];

const modFindFiles = require('./mod');

modFindFiles(path, ext, (errorMessage, result) => {

	if(errorMessage) {
		console.log(errorMessage);
	}
	else {

		/* Print the file names from the returned list */
		var files = result;
		files.forEach(function (file) {
          console.log(file);
      })
	}
 
});
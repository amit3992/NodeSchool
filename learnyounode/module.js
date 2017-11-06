const fs = require('fs');

var findFiles = (path, ext, callback) => {

	fs.readdir(path, (error, files) => {
	if(error) {
		return console.log(error);
	}
	else {
		var result = 0;
		for(var i = 0; i < files.length; i++) {
			var file = files[i].split('.');
			if(file[1] === ext) {
				result += 1;
				console.log(files[i]);
			}
		}
	}
});
};
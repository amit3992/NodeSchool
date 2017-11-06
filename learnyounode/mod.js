const fs = require('fs');

var findFiles = (path, ext, callback) => {

	fs.readdir(path, (error, files) => {
	if(error) {
		return callback(error);
	}
	else {
		
		var result = 0;
		var filteredList = new Array();
		
		for(var i = 0; i < files.length; i++) {
			var file = files[i].split('.');
			
			if(file[1] === ext) {
				result += 1;
				filteredList.push(files[i]);
			}
		}

		callback(undefined, filteredList);
	}
});
};

module.exports = findFiles;
function countWords(inputWords) {
   
    var obj = inputWords.reduce((outputObj, next) => {
    	
    	console.log('Output object: ' + outputObj);
    	console.log('\nNextItem: ' + next);
    	console.log('\n');

    	outputObj[next] = ++outputObj[next] || 1;
    	return outputObj;
    }, {});

    return obj;
}

module.exports = countWords
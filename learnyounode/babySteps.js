//console.log(process.argv);


/*
You can access command-line arguments via the global process object. The
process object has an argv property which is an array containing the
complete command-line. i.e. process.argv.

*/
const len = process.argv.length;
var index = 2;
var result = 0;
while(index < len) {
	result += Number(process.argv[index]);
	index++;
}

console.log(result);
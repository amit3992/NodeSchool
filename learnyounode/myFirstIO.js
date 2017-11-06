/*
 To perform a filesystem operation you are going to need the fs module from
 the Node core library. To load this kind of module, or any other "global"
 module, use the following incantation:

    var fs = require('fs')

 Now you have the full fs module available in a variable named fs.
*/

const fs = require('fs');
var path = process.argv[2];

var buf = fs.readFileSync(path);
var str = buf.toString();

var list = str.split('\n');

console.log(list.length - 1);
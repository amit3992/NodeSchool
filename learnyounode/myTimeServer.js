const net = require('net');
const port = process.argv[2];

const server = net.createServer((socket) => {

    // 'Connection' listener
   // console.log('client connected');
    let time = getDate();
    socket.end(time);
});

server.listen(port);

var getDate = () => {
	var date = new Date();

    var year = date.getFullYear();
    var mnth = date.getMonth();
    var d = date.getDate();
	var hours = date.getHours();
    var min = date.getMinutes();

	return year + "-" + adjust(mnth + 1) + "-" + adjust(d) + " " + adjust(hours) + ":" + adjust(min) + "\n";
}

var adjust = (n) => {
    return n < 10 ? '0' + n : n;
}

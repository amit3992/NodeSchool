const http = require('http');

var urls = new Array();
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var output = [];
var completed_responses = 0;
var num = 1;

urls.forEach((url) => {	
	
	http.get(url, (response) => {
		
		var responses = "";
		
		response.setEncoding("utf8");
		
		response.on("data", (chunk) => {
			responses += chunk;
		});

		response.on("end", () => {
			if(completed_responses++ == urls.length - 1) {
				
				//console.log('Final url..')
				output.push(responses);
				
				for(var i = 0; i < output.length; i++) {
					console.log(output[i]);
				}
			}
			else {
				
				output.push(responses);
				num += 1;
			}
		});
	});
});


/* SOLUTION

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }



*/


const express = require('express');
const bodyparser = require('body-parser')
  
/* Variables */
const port = process.argv[2];
const path = process.argv[3];
const app = express();

/* Middleware */
app.use(bodyparser.urlencoded({extended: false}))

/* Handle post request */
app.post('/form', (req, res) => {

	var revString = req.body.str.split('').reverse().join('');
	res.end(revString);
});

app.listen(port);
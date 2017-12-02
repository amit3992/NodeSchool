const express = require('express');
const app = express();
const port = process.argv[2];
const path = process.argv[3];


app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(port);
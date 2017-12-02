const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/search', (req, res) => {
    var query = req.query;
    res.send(query);
});


app.listen(port);
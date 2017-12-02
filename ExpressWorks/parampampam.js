const express = require('express');
const app = express();
const port = process.argv[2];
const crypto = require('crypto');

app.put('/message/:id', (req, res) => {
    var id = req.params.id;
    var dateString = new Date().toDateString();
    var str = crypto.createHash('sha1')
                    .update(dateString + id)
                    .digest('hex');

    res.send(str);
});

app.listen(port);
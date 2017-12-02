const express = require('express');
const fs = require('fs');

/* Constants */
const app = express();
const port = process.argv[2];

app.get('/books', (req, res) => {

    fs.readFile(process.argv[3], (error, content) => {
        if(error) {
            console.log(error);
        }
        
        let bookData = JSON.parse(content.toString());
        res.json(bookData);
    });
});


app.listen(port);
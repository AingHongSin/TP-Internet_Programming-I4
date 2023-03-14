const express = require('express')
const path = require('path');
const fs = require("fs")

const app = express()

const filePath = path.join(__dirname, 'public', 'index.html');

 
app.get('/', function (req, res) {
    fs.readFile('./src/Index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }
        
        fs.readFile('./src/styles.css', 'utf8', (err, cssData) => {
            const updatedData = data.replace('<link rel="stylesheet" href="./styles.css">', `<style>${cssData}</style>`);

            res.send(updatedData)
        });
        

    })

    console.log(__dirname)

})

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
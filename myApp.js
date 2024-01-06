let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
});

app.use('/public', express.static(__dirname + '/public'));
































 module.exports = app;

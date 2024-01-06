require('dotenv').config()

let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    const responseText = "Hello json";
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message": responseText.toUpperCase()});
    } else {
        res.json({"message": responseText});
    }
});

app.use('/public', express.static(__dirname + '/public'));































 module.exports = app;

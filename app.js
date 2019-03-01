var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');
var port = 8080;
var db = 'mongodb://localhost/example';

mongoose.connect(db, { useNewUrlParser: true });

app.get('/', function(req, res) {
    res.send('It works!');
});

app.get('/books', function(req, res) {
    console.log('Getting all books');
    Book.find({}).exec(function(err, books) {
        if(err) {
            res.send('Error has Occured');
        } else {
            console.log(books);
            res.json(books);
        }
    });
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
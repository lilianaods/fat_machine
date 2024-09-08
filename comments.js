// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var comments = require('./comments.json');

// Create a route for the path /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

app.use(bodyParser.json());

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.json(comment);
  });
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');

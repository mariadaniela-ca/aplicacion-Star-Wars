var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/planet', function (req, res) {
  res.render('planet');
});

app.get('/people', function (req, res) {
  res.render('people');
});

app.get('/vehicle', function (req, res) {
  res.render('vehicle');
});

app.get('/contacto', function (req, res) {
  res.render('contacto');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
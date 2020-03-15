const http = require('http');
const express = require('express');

const app = express();

const hostname = 'localhost';
const port = 8080;

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//app.use('/public', express.static('public'));
app.use('/views', express.static('views'));
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`App listening on port ${port}`));


// Routes
//app.get('/week6', testFunction);

app.get('/index', function (req, res) {
  res.render('home');
})

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/shows', function (req, res) {
  res.render('shows');
})

app.get('/archive', function (req, res) {
  res.render('archive');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/theartistisnotpresent', function (req, res) {
  res.render('theartistisnotpresent');
})

app.get('/ctc1000', function (req, res) {
  res.render('ctc1000');
})

app.get('/ctc3002', function (req, res) {
  res.render('ctc3002');
})



// function testFunction(req, res){
// 	console.log('testFunction has been called!');
// 	res.render('week6')
// }


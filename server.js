const http = require('http');
const express = require('express');

const app = express();

const hostname = 'localhost';
const port = 8080;

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.static('public'));
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

app.get('/week6', function (req, res) {
  res.render('week6');
})



// function testFunction(req, res){
// 	console.log('testFunction has been called!');
// 	res.render('week6')
// }


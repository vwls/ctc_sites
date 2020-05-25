const http = require('http');
// const https = require('https');

const express = require('express');

// const fs = require('fs');

// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };

const app = express();

const hostname = 'localhost';
const port = 8000;

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/views', express.static('views'));
app.use('/assets', express.static('views/assets/images'));

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`App listening on port ${port}`));


// ROUTES

// Home page routes
// COMMENTING THESE OUT FOR NOW FOR PRESHOW BEHAVIOR
// app.get('/index', function (req, res) {
//   res.render('home');
// })

// app.get('/', function (req, res) {
//   res.render('home');
// })

// app.get('/home', function (req, res) {
//   res.render('home');
// })

app.get('/index', function (req, res) {
  res.render('preshow');
})

app.get('/', function (req, res) {
  res.render('preshow');
})

app.get('/home', function (req, res) {
  res.render('preshow');
})

app.get('/main', function (req, res) {
  res.render('home');
})


// Other page routes
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

// Alternate design page
app.get('/alt', function (req, res) {
  res.render('alt');
})




// Individual artist pages for show 1 (ctc1000)
app.get('/ctc1000/arayla-bakhat-baketebaike', function (req, res) {
  res.render('ctc1000/arayla');
})

app.get('/ctc1000/mariana-ramos-ortiz', function (req, res) {
  res.render('ctc1000/mariana');
})
app.get('/ctc1000/mariana_p1', function (req, res) {
  res.render('ctc1000/mariana_p1');
})
app.get('/ctc1000/mariana_p3', function (req, res) {
  res.render('ctc1000/mariana_p3');
})

app.get('/ctc1000/yasemin-sarihan', function (req, res) {
  res.render('ctc1000/yasemin');
})

app.get('/ctc1000/ligia-carabarin-amiguet', function (req, res) {
  res.render('ctc1000/ligia');
})

app.get('/ctc1000/tianyue-he', function (req, res) {
  res.render('ctc1000/tianyue');
})

app.get('/ctc1000/nick-knezevich', function (req, res) {
  res.render('ctc1000/nick');
})

app.get('/ctc1000/truman-lesack', function (req, res) {
  res.render('ctc1000/truman');
})

app.get('/ctc1000/jacob-lightman', function (req, res) {
  res.render('ctc1000/jacob');
})

app.get('/ctc1000/sanjana-govind-masurkar', function (req, res) {
  res.render('ctc1000/sanjana');
})

app.get('/ctc1000/cameron-nayeri', function (req, res) {
  res.render('ctc1000/cameron');
})

app.get('/ctc1000/shuyuan-zheng', function (req, res) {
  res.render('ctc1000/shuyuan');
})

app.get('/ctc1000/sumanth-mysore-krishna', function (req, res) {
  res.render('ctc1000/sumanth');
})

app.get('/ctc1000/erika-ng', function (req, res) {
  res.render('ctc1000/erika');
})

app.get('/ctc1000/jade-ning', function (req, res) {
  res.render('ctc1000/jade');
})

app.get('/ctc1000/manmeet-sodhi', function (req, res) {
  res.render('ctc1000/manmeet');
})

app.get('/ctc1000/yuan-tao', function (req, res) {
  res.render('ctc1000/yuan');
})

app.get('/ctc1000/yi-yang', function (req, res) {
  res.render('ctc1000/yi');
})


// Individual artist pages for show 2 (ctc3002)
app.get('/ctc3002/diego-espinoza', function (req, res) {
  res.render('ctc3002/diego');
})

app.get('/ctc3002/lily-douglas', function (req, res) {
  res.render('ctc3002/lily');
})

app.get('/ctc3002/lisha-nie', function (req, res) {
  res.render('ctc3002/lisha');
})

app.get('/ctc3002/zack-davey', function (req, res) {
  res.render('ctc3002/zack');
})

app.get('/ctc3002/chanel-lee', function (req, res) {
  res.render('ctc3002/chanel');
})

app.get('/ctc3002/camille-cady-mccrea', function (req, res) {
  res.render('ctc3002/camille');
})

app.get('/ctc3002/maggie-guo', function (req, res) {
  res.render('ctc3002/maggie');
})

app.get('/ctc3002/rory-hernandez-romero', function (req, res) {
  res.render('ctc3002/rory');
})

app.get('/ctc3002/tommy-ohalleran', function (req, res) {
  res.render('ctc3002/tommy');
})

app.get('/ctc3002/madison-sheldon', function (req, res) {
  res.render('ctc3002/madison');
})

app.get('/ctc3002/kai-stewart', function (req, res) {
  res.render('ctc3002/kai');
})



// 404 page 
// KEEP THIS AS THE LAST GET REQUEST HANDLER
app.get('*', function(req, res){
  res.status(404).render('404');
});


// function testFunction(req, res){
// 	console.log('testFunction has been called!');
// 	res.render('week6')
// }


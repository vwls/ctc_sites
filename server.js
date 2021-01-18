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
// COMMENTING THESE OUT FOR PRESHOW BEHAVIOR
app.get('/index', function (req, res) {
  res.render('home');
})

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/home', function (req, res) {
  res.render('home');
})

// app.get('/index', function (req, res) {
//   res.render('preshow');
// })

// app.get('/', function (req, res) {
//   res.render('preshow');
// })

// app.get('/home', function (req, res) {
//   res.render('preshow');
// })

// app.get('/main', function (req, res) {
//   res.render('home');
// })


// Other page routes
app.get('/shows', function (req, res) {
  res.render('current');
})

app.get('/current', function (req, res) {
  res.render('current');
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

app.get('/ctc2000', function (req, res) {
  res.render('ctc2000');
})

app.get('/ctc3001', function (req, res) {
  res.render('ctc3001');
})

app.get('/dm2132', function (req, res) {
  res.render('dm2132');
})


// Alternate page design
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


// Individual artist pages for show 3 (dm2132)
app.get('/dm2132/kyros-barton', function (req, res) {
  res.render('dm2132/kyros');
})

app.get('/dm2132/zhanyi-chen', function (req, res) {
  res.render('dm2132/zhanyi');
})

app.get('/dm2132/wen-yu-du', function (req, res) {
  res.render('dm2132/du');
})

app.get('/dm2132/chang-hong', function (req, res) {
  res.render('dm2132/chang');
})

app.get('/dm2132/kathryn-jarvinen', function (req, res) {
  res.render('dm2132/kat');
})

app.get('/dm2132/kai-ji', function (req, res) {
  res.render('dm2132/kai');
})

app.get('/dm2132/zixin-li', function (req, res) {
  res.render('dm2132/zixin');
})

app.get('/dm2132/yuhan-ma', function (req, res) {
  res.render('dm2132/yuhan');
})

app.get('/dm2132/jack-madden', function (req, res) {
  res.render('dm2132/jack');
})

app.get('/dm2132/nupoor-maduskar', function (req, res) {
  res.render('dm2132/nupoor');
})

app.get('/dm2132/shelby-shaw', function (req, res) {
  res.render('dm2132/shelby');
})

app.get('/dm2132/travess-smalley', function (req, res) {
  res.render('dm2132/travess');
})

// Individual artist pages for show 4 (ctc3001)
app.get('/ctc3001/elena-bremner', function (req, res) {
  res.render('ctc3001/elena');
})

app.get('/ctc3001/maya-campbell', function (req, res) {
  res.render('ctc3001/maya');
})

app.get('/ctc3001/hyeju-cho', function (req, res) {
  res.render('ctc3001/hyeju');
})

app.get('/ctc3001/isa', function (req, res) {
  res.render('ctc3001/isa');
})

app.get('/ctc3001/qian-xi-luo', function (req, res) {
  res.render('ctc3001/qian');
})

app.get('/ctc3001/yi-yang', function (req, res) {
  res.render('ctc3001/yi');
})

app.get('/ctc3001/soeun-yoon', function (req, res) {
  res.render('ctc3001/soeun');
})

// Individual artist pages for show 5 (ctc2000)
app.get('/ctc2000/aishwarya-bagaria', function (req, res) {
  res.render('ctc2000/aishwarya');
})

app.get('/ctc2000/elena-bremner', function (req, res) {
  res.render('ctc2000/elena');
})

app.get('/ctc2000/maya-campbell', function (req, res) {
  res.render('ctc2000/maya');
})

app.get('/ctc2000/maggie', function (req, res) {
  res.render('ctc2000/maggie');
})

app.get('/ctc2000/indrashish', function (req, res) {
  res.render('ctc2000/indrashish');
})

app.get('/ctc2000/juyun', function (req, res) {
  res.render('ctc2000/juyun');
})

app.get('/ctc2000/xinyi', function (req, res) {
  res.render('ctc2000/xinyi');
})

app.get('/ctc2000/yujin-hwang', function (req, res) {
  res.render('ctc2000/yujin');
})

app.get('/ctc2000/katrina-machado', function (req, res) {
  res.render('ctc2000/katrina');
})

app.get('/ctc2000/mariana-ramos-ortiz', function (req, res) {
  res.render('ctc2000/mariana');
})

app.get('/ctc2000/owen-wang', function (req, res) {
  res.render('ctc2000/owen');
})

app.get('/ctc2000/shuyuan-zheng', function (req, res) {
  res.render('ctc2000/shuyuan');
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


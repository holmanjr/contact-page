var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.render('index');
})

app.listen(3000, function(){
  console.log('App running on localhost:3000');
});

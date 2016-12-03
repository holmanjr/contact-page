var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var username = "user@gmail.com";
var password = "password";

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.render('index');
})

app.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: username,
      pass: password
    }
  });

  var mailOptions = {
    from: req.body.firstname+' '+req.body.lastname+'<'+req.body.email+'>',
    to: 'holmanjr17@gmail.com',
    subject: 'Submission for Kool-Aid',
    text: req.body.message,
    html: '<p>'+req.body.message+'</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Message Sent: '+info.response);
      res.redirect('/');
    }
  });
});

app.listen(3000, function(){
  console.log('App running on localhost:3000');
});

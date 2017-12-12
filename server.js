var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require('path');


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/christmas_songs', function(err, client){
  if(err){
    return console.log(err);
  }

  db = client.db('christmas_songs');
  console.log("Connected to DB");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get('/songs', function(req, res){
  db.collection('christmas_songs').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

app.post('/songs', function(req, res){
  db.collection('christmas_songs').save(req.body, function(err, result){
    if(err){
      return console.log(err);
    }
    console.log("Saved to database");
    res.redirect('/');
  });
});

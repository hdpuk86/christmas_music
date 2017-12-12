var SongView = require('./views/songView.js');

var app = function(){
  var url = ('/songs');
  makeRequest(url, requestComplete);
};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var songs = JSON.parse(jsonString);
  var songView = new SongView(songs);
};

window.addEventListener('load', app);

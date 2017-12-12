var SongView = function(songs){
  this.render(songs);
};

SongView.prototype = {
  render: function(songs){
    songs.forEach(function(song){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('songs');
      text.innerText = song.title + ": " + song.artist;
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

module.exports = SongView;

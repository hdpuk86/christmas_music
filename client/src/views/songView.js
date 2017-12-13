var SongView = function(songs){
  this.render(songs);
};

SongView.prototype = {
  render: function(songs){
    var ul = document.getElementById('songs');
    ul.innerText = '';
    songs.forEach(function(song){
      var li = document.createElement('li');

      var text = document.createElement('p');
      text.innerText = song.title + ": " + song.artist;

      var form = document.createElement('form');
      form.method = "POST";
      form.action = "/delete/" + song._id;

      var bin = document.createElement('button');
      bin.className = "bin-btn";
      bin.type = "submit";
      bin.innerHTML = "<img src='../../images/bin.png' class='bin-img'>";

      form.appendChild(bin);
      li.appendChild(text);
      li.appendChild(form);
      ul.appendChild(li);
    })
  }
}
module.exports = SongView;

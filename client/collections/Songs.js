// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        this.add(data.results);
        this.trigger('fetch');
      }.bind(this)
    });
  }, 
});
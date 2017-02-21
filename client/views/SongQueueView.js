// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log(this.collection);
    this.collection.on('change', function() {
      console.log(this);
      this.render();
    }, this);
  },

  render: function() {
    return this.$el;
  }

});

(function() {

  var mongoose = require('mongoose');

  var LatestSchema = new mongoose.Schema({
    reviews: []
  });

  module.exports = mongoose.model('latestreviews', LatestSchema);

})();

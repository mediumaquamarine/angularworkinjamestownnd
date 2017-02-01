(function() {

  var mongoose = require('mongoose');

  var LatestSchema = new mongoose.Schema({
    lastestreviews: []
  });

  module.exports = mongoose.model('latestreviews', LatestSchema);

})();

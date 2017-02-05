(function() {

  var mongoose = require('mongoose');

  var LatestSchema = new mongoose.Schema({
    cavendish: String,
    utc: String,
    newmansigns: String,
    realtruck: String,
    gavillon: String,
    cargill: String
  });

  module.exports = mongoose.model('latestreviews', LatestSchema);

})();

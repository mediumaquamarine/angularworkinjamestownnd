(function() {

  var mongoose = require('mongoose');

  var CompanySchema = new mongoose.Schema({
    company: {
      type: String,
      unique: true
    },
    allreviews: []
  });

  module.exports = mongoose.model('companies', CompanySchema);

})();

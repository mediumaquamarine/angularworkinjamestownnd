(function() {

  var mongoose = require('mongoose');

  var UserSchema = new mongoose.Schema({
    userid: {
      type: String,
      unique: true
    }

  });

  module.exports = mongoose.model('users', UserSchema);

})();

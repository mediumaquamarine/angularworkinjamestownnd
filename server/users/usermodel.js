(function() {

  var mongoose = require('mongoose');

  var UserSchema = new mongoose.Schema({
    userid: {
      type: String,
      unique: true
    },
    email: Boolean
  });

  module.exports = mongoose.model('users', UserSchema);

})();

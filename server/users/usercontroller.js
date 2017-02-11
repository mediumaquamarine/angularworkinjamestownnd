(function() {

  var config = require('../config/config');
  var User = require('./usermodel.js');

  module.exports = {

    getUserData: function (req, res, next) {
      var userid = req.body.id;
      var emailVerified = req.body.emailVerified;
      //see if user already exist and send user's data
      User.findOne({userid: userid}, function(err, user) {
        if (err) {
          throw (err);
        }
        if (user) {
          res.json(user);
          return;
        } else {
          function makeUser() {
            User.findOne({userid: userid}, function(err, user) {
              if (err) {
                next(err);
              }
              var newUser = new User ({
                userid: userid,
                email: emailVerified
              });
              newUser.save(function(err) {
                if (err) {
                  throw (err);
                }
                res.json(newUser);
              });
            });
          }
          makeUser();
        }
      });
    }
  };

})();

(function() {

  var User = require('../users/usermodel.js')
  //checks that user is in the database, the jwt token is checked on the client before the request is made.  Not 100% secure, it is possible if to post outside the client if the userid is known.
  module.exports = function(app, express) {
    app.use(function(req, res, next) {
      var user = req.boyd.userid
      User.findOne({userid: user}, function(err, exist) {
        if (err) {
          throw (err)
        }
        if (!exist) {
          res.json('User not in the database');
        }
        if (exist) {
          next();
        }
      })
    })
  };

})();

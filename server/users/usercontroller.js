(function() {

  var config = require('../config/config');
  var User = require('./usermodel.js');

  module.exports = {
    getUserData: function (req, res, next) {
      var userid = req.body.id;
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
                userid: userid
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
    //can be called to add a medal to the user
  //   addMedal: function(req, res, next) {
  //     var userid = req.body.userid;
  //     var medal = req.body.medal;
  //     var upLevel = req.body.level;
  //     var points = req.body.points;
  //     User.findOneAndUpdate({userid: userid}, {$push: {medals: medal}}, function (err, user) {
  //       if (err) {
  //         throw err;
  //       }
  //       user.grade1 = upLevel;
  //       user.points += points;
  //       user.save(function(err) {
  //         if (err) {
  //           throw err;
  //         }
  //         res.json(user);
  //       });
  //     });
  //   }
  };

})();

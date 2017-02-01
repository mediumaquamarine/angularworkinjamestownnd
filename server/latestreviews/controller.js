(function() {

  var Latest = require('./model.js');

  module.exports = {
    getLatestReview: function (req, res, next) {
      var companyName = req.body.companyName;
      //see if user already exist and send user's data
      Latest.find(function(err, rev) {
        if (err) {
          throw (err);
        }
        if (rev) {
          res.json(rev);
          return;
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

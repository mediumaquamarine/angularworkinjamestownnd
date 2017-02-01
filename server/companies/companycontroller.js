(function() {

  var Company = require('./companymodel.js');

  module.exports = {
    getInitialData: function (req, res, next) {
      var companyName = req.body.companyName;
      //see if user already exist and send user's data
      User.findOne({company: companyName}, function(err, comp) {
        if (err) {
          throw (err);
        }
        if (comp) {
          res.json({lastten: comp.lasttenreviews, rating: comp.rating});
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

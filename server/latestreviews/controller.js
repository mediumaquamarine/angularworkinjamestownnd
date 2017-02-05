(function() {

  var Latest = require('./model.js');

  module.exports = {
    getLatestReview: function (req, res, next) {
      //send the entire array of latest reviews
      Latest.find(function (err, rev) {
        if (err) {
          throw (err);
        }
        if (rev) {
          res.json(rev);
          return;
        }
      });
    },

    updateLatestReview: function (review, comp) {
      Latest.findOne({}, function (err, rev) {
        console.log(rev);
        rev[comp] = review;
        rev.save(function (err) {
          if (err) {
            throw (err)
          }
        })
      })
    }

  };

})();

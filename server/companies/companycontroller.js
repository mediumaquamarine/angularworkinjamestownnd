(function() {

  var Company = require('./companymodel.js');

  module.exports = {
    getInitialData: function (req, res, next) {
      var companyName = req.body.companyName;
      //see if user already exist and send user's data
      Company.findOne({company: companyName}, function(err, comp) {
        if (err) {
          throw (err);
        }
        if (comp) {
          res.json({lastten: comp.lasttenreviews, rating: comp.rating});
          return;
        }
      });
    },
    //can be called to write a review to the database
    writeReview: function(req, res) {
      var companyName = req.body.companyName;
      var review = req.body.review;
      var rating = req.body.rating;
      var author = req.body.author;
      Company.findOneAndUpdate({company: companyName}, {$push: { allreviews: review }}, {$push: { authors: author }}, function (err, comp) {
        if (err) {
          throw err;
        }
        comp.rating = rating;
        comp.save(function(err) {
          if (err) {
            throw err;
          }
          res.json('success');
        });
      });
    }
  };

})();

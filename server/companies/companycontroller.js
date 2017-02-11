(function() {

  var Company = require('./companymodel.js');
  var Latest = require('../latestreviews/controller.js');

  module.exports = {

    getReviews: function (req, res) {
      var companyName = req.body.companyName;
      //see if user already exist and send user's data
      Company.findOne({company: companyName}, function(err, comp) {
        if (err) {
          throw (err);
        }
        if (!comp) {
          res.json('Not in here');
        }
        if (comp) {
          res.json({reviews: comp.allreviews, rating: comp.rating, authors: comp.authors});
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
      Company.findOneAndUpdate({company: companyName},
        {
          $push: {
            allreviews: {
              $each: [ {author: author, review: review, rating: rating} ]
            }
          }
        },
         function (err, comp) {
           if (err) {
             throw err;
           }
           comp.save(function(err) {
             if (err) {
               throw err;
             }
             Latest.updateLatestReview(review, companyName.toLowerCase());
             res.json('success');
           });
         }
      );
    }
  };

})();

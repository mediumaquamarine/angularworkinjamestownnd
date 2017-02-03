(function() {

  var usersController = require('../users/usercontroller.js');
  var latestController = require('../latestreviews/controller.js');
  var companiesController = require('../companies/companycontroller.js');

  module.exports = function(app, express) {

    app.post('/api/data', usersController.getUserData);
    app.get('/api/lastreviews', latestController.getLatestReview);
    app.post('/api/reviews', companiesController.getReviews);

  };

})();

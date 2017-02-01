(function() {

  var usersController = require('../users/usercontroller.js');
  var latestController = require('../latestreviews/controller.js');

  module.exports = function(app, express) {

    app.post('/api/data', usersController.getUserData);
    app.get('/api/lastreviews', latestController.getLatestReview);

  };

})();

(function() {

  var usersController = require('../users/usercontroller.js');
  var lastestController = require('../latestreviews/controller.js');

  module.exports = function(app, express) {

    app.post('/api/data', usersController.getUserData);
    app.post('/api/lastreviews', latestController.getLatestReview);

  };

})();

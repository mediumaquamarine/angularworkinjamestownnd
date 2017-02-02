(function() {

  var companies = require('../companies/companycontroller.js');


  module.exports = function(app, express) {

    app.post('/api/writereview', companies.writeReview);


  };

})();

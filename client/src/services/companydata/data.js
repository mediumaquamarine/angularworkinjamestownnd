(function() {

  angular.module('work')
    .factory('companydata', ['$http', '$rootScope', '$window', function($http, $rootScope, $window) {
      var getLatestReviews = function() {
        $http.get('api/lastreviews', {})
          .then((res) => {
            // console.log(res.data[0].reviews);
            $rootScope.latestReviews = res.data[0].reviews;
          });
      };

      return {
        getLatestReviews: getLatestReviews
      };

    }]);

})();

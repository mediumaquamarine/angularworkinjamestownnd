(function() {

  angular.module('work')
    .factory('companydata', ['$http', '$rootScope', '$window', 'authService', '$state', function($http, $rootScope, $window, authService, $state) {
      var getLatestReviews = function() {
        $http.get('api/lastreviews', {})
          .then((res) => {
            $rootScope.latestReviews = res.data[0].reviews;
          });
      };

      var signInOrWrite = function() {
        if(!$rootScope.isAuthenticated) {
          authService.login();
        }
        else {
          $state.go('writereview');
        }
      };

      return {
        getLatestReviews: getLatestReviews,
        signInOrWrite: signInOrWrite
      };

    }]);

})();

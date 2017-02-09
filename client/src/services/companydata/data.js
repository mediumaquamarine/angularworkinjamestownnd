(function() {

  angular.module('work')
    .factory('companydata', ['$http', '$rootScope', '$window', 'authService', '$state', function($http, $rootScope, $window, authService, $state) {
      var getLatestReviews = function() {
        $http.get('api/lastreviews', {})
          .then((res) => {
            var excerpts = res.data[0];
            for (var key in excerpts) {
              excerpts[key] = excerpts[key].slice(0,20) + '...'
            }
            $rootScope.latestReviews = excerpts;
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

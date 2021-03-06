(function() {

  angular.module('work')
    .factory('writefac', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', '$http', '$timeout', function($rootScope, authService, userdata, $state, $window, companydata, $http, $timeout) {

      return {
        submitReview: submitReview
      };

      function submitReview() {
        var user = JSON.parse($window.localStorage.userProfile).userid;
        var company = $window.localStorage.company;
        //if logged in by email, then name will be under username, if logged in by facebook, name will be under name
        var name = JSON.parse($window.localStorage.profile).username || JSON.parse($window.localStorage.profile).name;
        $http.post('api/writereview', {userid: user, companyName: company, review: this.review, author: name, rating: this.rating})
          .then(function(res) {
            if (res.data === 'success') {
              $state.go('reviews');
            }
          });
        this.review = '';
        this.rating = '';
      }

    }]);

})();

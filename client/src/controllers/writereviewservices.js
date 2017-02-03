(function() {

  angular.module('work')
    .factory('writefac', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', '$http', function($rootScope, authService, userdata, $state, $window, companydata, $http) {

      return {
        submitReview: submitReview
      }

      function submitReview() {
        var user = JSON.parse($window.localStorage.userProfile).userid;
        var company = $window.localStorage.company;
        var name = JSON.parse($window.localStorage.profile).name;
        $http.post('api/writereview', {userid: user, companyName: company, review: this.review, author: name, rating: this.rating});
        this.review = "";
        this.rating = "";
      }

    }]);

})();
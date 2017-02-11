(function() {

  angular.module('work')
    .controller('WriteReviewController', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', 'writefac', function($rootScope, authService, userdata, $state, $window, companydata, writefac) {
      //makes sure user is authenticated
      if (!$rootScope.isAuthenticated) {
        $state.go('home');
      }
      if(!JSON.parse($window.localStorage.profile).email_verified) {
        authService.logout();
        $state.go('mustverify');
      }
      var vm = this;
      //grabs the name of the current company
      vm.company = $window.localStorage.company;
      vm.review;
      vm.rating;
      vm.submit = writefac.submitReview;
    }]);

})();

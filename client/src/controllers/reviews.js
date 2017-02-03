(function() {

  angular.module('work')
    .controller('ReviewController', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', '$http', '$sce', function($rootScope, authService, userdata, $state, $window, companydata, $http, $sce) {


      var vm = this;
      //grabs the name of the current company
      vm.company = $window.localStorage.company;
      vm.reviews = vm.reviews || "Be the first to review";
      vm.trustAsHtml = $sce.trustAsHtml;

      $http.post('api/reviews', {companyName: vm.company})
        .then(function(res) {
          vm.reviews = res.data.reviews;
          console.log(res.data.authors);
          console.log(res.data.reviews);
        })
    }]);

})();

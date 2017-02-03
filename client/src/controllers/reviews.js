(function() {

  angular.module('work')
    .controller('ReviewController', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', function($rootScope, authService, userdata, $state, $window, companydata) {


      var vm = this;
      //grabs the name of the current company
      vm.company = $window.localStorage.company;
      vm.display = "Be the first to review";

    }]);

})();

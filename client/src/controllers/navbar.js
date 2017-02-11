(function() {

  angular.module('work')
    .controller('NavbarController', ['$rootScope', 'authService', '$state', '$window', function($rootScope, authService, $state, $window) {

      var vm = this;
      //this makes the authService accessible on the navbar template
      vm.authService = authService;

    }]);

})();

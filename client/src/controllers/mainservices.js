(function() {

  angular.module('work')
    .factory('mainfac', ['$state', '$window', function($state, $window) {

      return {
        goWrite: goWrite
      };

      function goWrite(company) {
        $window.localStorage.company = company;
        $state.go('reviews');
      }

    }]);

})();

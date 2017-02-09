(function() {

  angular.module('work')
    .controller('MainController', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', 'mainfac', function($rootScope, authService, userdata, $state, $window, companydata, mainfac) {
      //if user is not authenticated then local storage, except for userProfile, gets wiped
      if (!$rootScope.isAuthenticated) {
        $window.localStorage.clear();
      }

      var vm = this;
      vm.latestReviews;
      vm.profile;
      vm.cavendish = mainfac.goWrite;
      vm.utc = mainfac.goWrite;
      vm.newmansigns = mainfac.goWrite;
      vm.realtruck = mainfac.goWrite;
      vm.gavillon = mainfac.goWrite;
      vm.cargill = mainfac.goWrite;
      vm.walmart = mainfac.goWrite;
      vm.menards = mainfac.goWrite;
      vm.newmansigns = mainfac.goWrite;
      vm.hugos = mainfac.goWrite;
      vm.cashwise = mainfac.goWrite;
      vm.napa = mainfac.goWrite;
      vm.loaded = false;
      //this is neccesary to use authService from the navbar
      authService.getProfileDeferred().then(function(profile) {
        vm.profile = profile;
      })
      .then(function() {
          //puts user data on the rootScope = userStuff
        userdata.getData(vm.profile.user_id);

      });

      companydata.getLatestReviews();

    }]);

})();

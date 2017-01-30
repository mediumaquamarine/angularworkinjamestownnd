(function() {

  angular.module('work')
    .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider', function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: '../../templates/main/index.html',
          controller: 'MainController as main',
          css: '../../content/css.css'
        })


      lockProvider.init({
        clientID: 'Q7K0Q6Ip5I4zprAqHBCtfA5EMUbkxJce',
        domain: 'easyismath.auth0.com',
        options: {
          theme: {
            logo: '../../content/easyismathsmall.png',
          },
          languageDictionary: {
            title: "Ready for adventure?"
          }
        }
      });

      jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        }
      });

    }]);

})();

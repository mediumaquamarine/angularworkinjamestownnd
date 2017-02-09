(function() {

  angular.module('work')
    .config(['$stateProvider', 'lockProvider', '$urlRouterProvider', 'jwtOptionsProvider', function($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: '../../templates/main/index.html',
          controller: 'MainController as main'
        })

        .state('reviews', {
          url: '/reviews',
          templateUrl: '../../templates/reviews/reviews.html',
          controller: 'ReviewController as review'
        })

        .state('writereview', {
          url: '/writereview',
          templateUrl: '../../templates/writereview/writereview.html',
          controller: 'WriteReviewController as write'
        })

        .state('terms', {
          url: '/terms',
          templateUrl: '../../templates/terms.html'
        })

        .state('mustverify', {
          url: '/mustverify',
          templateUrl: '../../templates/mustverify.html'
        })


      lockProvider.init({
        clientID: 'CR9Vt7bU2sSDxfTxi8KAfE30NcTVSQaa',
        domain: 'workinjamestownnd.auth0.com',
        options: {
          theme: {
            logo: '../../content/workinjamestownnd.png',
          },
          languageDictionary: {
            title: "Ready to tell all?"
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

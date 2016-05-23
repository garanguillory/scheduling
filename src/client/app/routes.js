angular
  .module('Scheduling').config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>',
        // restricted: true,
        preventLoggedIn: false
      })
      .when('/login', {
        template: '<login></login>',
        restricted: false,
        preventLoggedIn: true
      })
      .when('/signup', {
        template: '<signup></signup>',
        restricted: false,
        preventLoggedIn: true
      })
      .when('/company', {
        template: '<company></company>',
        restricted: true,
        preventLoggedIn: false
      })
      // .when('/profile', {
      //   template: '<profile></profile>',
      //   restricted: true,
      //   preventLoggedIn: false
      // })
      // .when('/deck/:id', {
      //   template: '<deck></deck>',
      //   restricted: true,
      //   preventLoggedIn: false
      // })
      // .when('/study/:id', {
      //   template: '<study></study>',
      //   restricted: true,
      //   preventLoggedIn: false
      // })
      // .when('/editdeck/:id', {
      //   template: '<editdeck></editdeck>',
      //   restricted: true,
      //   preventLoggedIn: false
      // })
      .when('/logout', {
        restricted: false,
        preventLoggedIn: false,
        resolve: {
          test: function(authService, $rootScope, $location) {
            authService.logout();
            $rootScope.currentUser = authService.getUserInfo();
            $location.path('/login');
          }
        }
      })
      .otherwise({redirectTo: '/login'});
      $httpProvider.interceptors.push('authInterceptor');
}]);

  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
          console.log(next.restricted)
        $location.path('/');
      }
    });
  }


angular
  .module('Scheduling')
  .run(routeChange);






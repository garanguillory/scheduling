(function () {

  'use strict';

  angular.module('Scheduling')
    .service('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$window'];

  function authInterceptor($window) {
    return {
      request: function(config) {
        // check for token in headers
        // config.headers['X-requested-with'] = XMLHttpRequest;
        var token = $window.localStorage.getItem('token');
        if(token) {
          config.headers.Authorization = "Bearer " + token;
          // return $q.resolve(config);
        }
        return config;
      }
    };
  }

})();
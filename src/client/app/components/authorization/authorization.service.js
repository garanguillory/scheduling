(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('Scheduling')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        return $http.post('/api/auth/login', user);
      },
      logout: function(user) {
        user = null;  
        $window.localStorage.clear();
      },
      signup: function(user) {
        console.log("authService user: ", user);
        return $http.post('/api/auth/signup', user);
      },
      setUserInfo: function(userData) {
        console.log("userData: ", userData);
        $window.localStorage.setItem('id', userData.data.data.id);
        $window.localStorage.setItem('email', userData.data.data.email);
        $window.localStorage.setItem('company_id', userData.data.data.company_id);
        $window.localStorage.setItem('token', userData.data.data.token);
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      },
    };
  }

  })();
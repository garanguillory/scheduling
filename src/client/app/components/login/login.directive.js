
angular
	.module('Scheduling')
	.directive("login",['loginService', 'authService', function(loginService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/login/login.view.html",
			controller: function($rootScope, $scope, $location){
				
				$scope.user = {};
				$scope.login = function() {
				  authService.login($scope.user)
				    .then(function(user) {
				      authService.setUserInfo(user);
				      console.log("user: ", user);
				      if(user.data.data.admin === true){
				      	$location.path('/company');
				      } else {
				      	$location.path('/profile');
				      }
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      console.log(err);
				    });
				};

			}
		};
}]);

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
				      // if/else to determine if user is an admin backend???
				      console.log("user: ", user);
				      $location.path('/company'); // need to change redirect path
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      console.log(err);
				    });
				};

			}
		};
}]);
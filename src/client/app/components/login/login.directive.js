
angular
	.module('Scheduling')
	.directive("login",['loginService', 'authService', function(loginService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/login/login.view.html",
			controller: function($scope, $location, $window){
				
			}
		};
}]);
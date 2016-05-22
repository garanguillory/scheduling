
angular
	.module('Scheduling')
	.directive("signup",['signupService', 'authService', function(signupService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/signup/signup.view.html",
			controller: function($scope, $location, $window){

				$scope.user = {};
				$scope.signUp = function(){

					// do something before the auth service

					authService.register($scope.user)
					  .then(function(user) {
					  	console.log("$scope.user: ", $scope.user);
					    authService.setUserInfo(user);
					    $location.path('/profile');
					    $rootScope.currentUser = authService.getUserInfo();
					  })
					  .catch(function(err) {
					    console.log("err: ",err);
					  });

				};
				
			}
		};
}]);
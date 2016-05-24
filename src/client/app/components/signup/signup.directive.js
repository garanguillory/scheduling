
angular
	.module('Scheduling')
	.directive("signup",['signupService', 'authService', function(signupService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/signup/signup.view.html",
			controller: function($rootScope, $scope, $location){

				$scope.user = {};
				$scope.signUp = function(){

					// do something before the auth service

					authService.signup($scope.user)
					  .then(function(user) {
					  	// console.log('user: ', user);
					  	// console.log("$scope.user: ", $scope.user);
					    authService.setUserInfo(user);
					    $rootScope.currentUser = authService.getUserInfo();
					    $location.path('/company'); // need to change redirect path
					  })
					  .catch(function(err) {
					    console.log("err: ",err);
					  });

				};
				
			}
		};
}]);
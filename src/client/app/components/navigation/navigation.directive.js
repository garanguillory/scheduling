
angular
	.module('Scheduling')
	.directive("navigation",['navigationService', 'authService', function(navigationService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navigation/navigation.view.html",
			controller: function($scope, $location, $window){

					if($window.localStorage.token){
						$scope.token = true;
					} else {
						$scope.token = false;
					}

					$scope.logout = function(){
						console.log("logging out...");
						authService.logout();
						$location.path('/login');
					};
				
			}
		};
}]);
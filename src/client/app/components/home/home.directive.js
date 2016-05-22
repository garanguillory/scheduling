
angular
	.module('Scheduling')
	.directive("home",['homeService', '$http', function(homeService, $http){
		return {
			restrict: 'AE',
			templateUrl: "app/components/home/home.view.html",
			controller: function($scope, $window, authService){

				// var id = $window.localStorage.id;

				// console.log('$window.localStorage: ', $window.localStorage);

				// console.log('currentUser: ', currentUser);

			}
		};
}]);
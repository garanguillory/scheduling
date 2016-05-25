
angular
	.module('Scheduling')
	.directive("navigation",['navigationService', 'authService', function(navigationService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navigation/navigation.view.html",
			controller: function($scope, $location, $window){

				var company_id = $window.localStorage.company_id;

				var employee_id = $window.localStorage.id;

					if($window.localStorage.token){
							
							$scope.token = true;

							navigationService.getCompany(company_id)
								.then(function(data){
									console.log('company info: ', data.data.data[0]);
									$scope.company = data.data.data[0].company;
								});

							navigationService.getEmployee(employee_id)
								.then(function(data){
									console.log('employee info: ', data.data.data[0]);
									$scope.employee = data.data.data[0];
								});

					} else {
						$scope.token = false;
					}

					$scope.logout = function(){
						console.log("logging out...");
						authService.logout();
						$location.path('/login'); // need to edit redirect path
					};
				
			}
		};
}]);
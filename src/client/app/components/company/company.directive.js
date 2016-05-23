
angular
	.module('Scheduling')
	.directive("company",['companyService', '$http', function(companyService, $http, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/company/company.view.html",
			controller: function($scope, $window, authService){
				// add company_id to localStorage
				var company_id = $window.localStorage.company_id;
				console.log('company_id: ', company_id);

				companyService.getEmployees(company_id)
							.then(function (data) {
							console.log('employees', data);
							$scope.employees = data.data.data;
					});

			}
		};
}]);
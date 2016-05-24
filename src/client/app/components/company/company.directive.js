
angular
	.module('Scheduling')
	.directive("company",['companyService', '$http', function(companyService, $http, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/company/company.view.html",
			controller: function($scope, $window, authService){
				
				var company_id = $window.localStorage.company_id;
				
				

				// companyService.getEmployees(company_id)
				// 			.then(function (data) {
				// 			console.log('employees', data);
				// 			$scope.employees = data.data.data;
				// 	});

			}
		};
}]);
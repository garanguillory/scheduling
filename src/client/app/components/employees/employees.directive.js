
angular
	.module('Scheduling')
	.directive("employees",['employeesService', 'authService', function(employeesService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/employees/employees.view.html",
			controller: function($scope, $window, authService){

				var company_id = $window.localStorage.company_id;
				
				employeesService.getEmployees(company_id)
							.then(function (data) {
							console.log('employees', data);
							$scope.employees = data.data.data;
					});

				$scope.employee = {};
				$scope.new_employee = {};

				$scope.selected = function(){
					$scope.employee = this.employee;
				};


				$scope.editing = function(){
					$scope.add_employee = false;
					return $scope.edit_employee ? $scope.edit_employee = false : $scope.edit_employee = true;
				};

				$scope.adding = function(){
					$scope.edit_employee = false;
					return $scope.add_employee ? $scope.add_employee = false : $scope.add_employee = true;
				};

			// edit bulk functions
				// $scope.editingBulk = function(){
				// 	$scope.add_employee = false;
				// 	return $scope.edit_employee ? $scope.edit_employee = false : $scope.edit_employee = true;
				// };

				// $scope.addingBulk = function(){
				// 	$scope.edit_employee = false;
				// 	return $scope.add_employee ? $scope.add_employee = false : $scope.add_employee = true;
				// };
				

			// add functionality for edit, delete, and update employee + conflicts
				$scope.edit = function(){
					console.log("edit function");
				};
			// add functionality for adding an employee + conflicts
				$scope.add = function(){
					console.log("add function");
				};

			}
		};
}]);

angular
	.module('Scheduling')
	.directive("employees",['employeesService', function(employeesService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/employees/employees.view.html",
			controller: function($scope, $window){

				var company_id = $window.localStorage.company_id;
				
				employeesService.getEmployees(company_id)
						.then(function (data) {
						console.log('employees', data);
						$scope.employees = data.data.data;
					});

				$scope.employee = {};
				$scope.new_employee = {};
				$scope.add_employee = false;
				$scope.edit_employee = false;
				$scope.selection = false;

				$scope.selected = function(){
					$scope.selection = true;
					$scope.employee = this.employee;
					$scope.edit_employee = true;
				};

				$scope.editing = function(){
					$scope.selection = false;
					$scope.employee = {};
					$scope.add_employee = false;
					return $scope.edit_employee ? $scope.edit_employee = false : $scope.edit_employee = true;
				};

				$scope.adding = function(){
					$scope.selection = false;
					$scope.employee = {};
					$scope.new_employee = {};
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
					$scope.employee.company_id = company_id;
					console.log("edit function");

					$scope.employee = {};
					$scope.employee.company_id = company_id;
				};
			// add functionality for adding an employee + conflicts
				$scope.add = function(){
					console.log("add function");
					$scope.new_employee.company_id = company_id;
					employeesService.addEmployee($scope.new_employee)
						.then(function (data) {
						console.log('new_employee', data);
						// $scope.employees = data.data.data;
						// reload page
					});
					$scope.new_employee = {};
					$scope.new_employee.company_id = company_id;
					$window.location.reload();
				};

				$scope.delete = function(){
					console.log(this.employee);
					employeesService.deleteEmployee(this.employee.id)
						.then(function () {
						console.log('employee deleted');
					});
					$window.location.reload();
				};

			}
		};
}]);
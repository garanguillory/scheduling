
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
					$scope.search = '';
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
					console.log("edit function");
					employeesService.editEmployee($scope.employee)
						.then(function(data) {
						console.log('employee edited: ', data);
					});
					$scope.employee = {};
					$scope.employee.company_id = company_id;
					$window.location.reload();
				};

			// need to add functionality for simultaneously adding conflicts
				$scope.add = function(){
					console.log("add function");
					$scope.new_employee.company_id = company_id;
					employeesService.addEmployee($scope.new_employee)
						.then(function(data) {
						console.log('new_employee', data);
					});
					$scope.new_employee = {};
					$scope.new_employee.company_id = company_id;
					$window.location.reload();
				};

			// need to add functionality for deleting the specified
			// employee's conflicts BEFORE deleting the employee
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



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// better edit function ???
		// $scope.edit = function(){
		// 	console.log("edit function");
		// 	employeesService.editEmployee($scope.employee.id, $scope.employee)
		// 		.then(function(data) {
		// 		console.log('employee edited: ', data);
		// 	});
		// 	$scope.employee = {};
		// 	$scope.employee.company_id = company_id;
		// };

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
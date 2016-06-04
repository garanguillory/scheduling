
angular
	.module('Scheduling')
	.directive("employees",['employeesService', function(employeesService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/employees/employees.view.html",
			controller: function($scope, $window){

				var company_id = $window.localStorage.company_id;
				
				employeesService.getEmployeeInfo(company_id)
						.then(function (data) {
						console.log('employees', data);
						$scope.employees = data.data.data;

						for(var i=0; i<$scope.employees.length; i++){
							$scope.employees[i].newConflicts = [];
							$scope.employees[i].conflicts.forEach(function(conflict){
								conflict.remove = false;
							});
							$scope.employees[i].conflictDates = $scope.employees[i].conflicts.map(function(c){
								return moment(c.date).format('YYYY-MM-DD');
							});
						}
					});

				$scope.employee = {};
				$scope.new_employee = {};
				$scope.add_employee = false;
				$scope.edit_employee = false;
				$scope.selection = false;

				$scope.remove = function(){
					this.conflict.remove = true;
					console.log(this.conflict);
				};

				$scope.keep = function(){
					this.conflict.remove = false;
					console.log(this.conflict);
				};

				$scope.selected = function(){
					$scope.new_employee = {};
					$scope.add_employee = false;
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


				$scope.delete = function(){
					console.log(this.employee);
					employeesService.deleteEmployee(this.employee.id)
						.then(function () {
						console.log('employee deleted');
					});
					$window.location.reload();
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

angular
	.module('Scheduling')
	.directive("profile",['profileService', 'authService', function(profileService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			controller: function($scope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;

				profileService.getEmployee(employee_id)
					.then(function(data){
						console.log("employee: ", data.data.data[0]);
						$scope.employee = data.data.data[0];
					})
					.catch(function(error){
						console.log("error: ", error);
					});

				$scope.edit_employee = false;

				$scope.editing = function(){
					return $scope.edit_employee ? $scope.edit_employee = false : $scope.edit_employee = true;
				};


				// add functionality for edit, delete, and update employee + conflicts
					$scope.edit = function(){
						// $scope.employee.company_id = company_id;
						// $scope.employee.id = id;
						profileService.editEmployee($scope.employee)
							.then(function(data) {
							console.log('employee edited: ', data);
						});
						$window.location.reload();
					};

				// need to add functionality for adding conflicts

				// addConflicts function
					// $scope.add = function(){
					// 	console.log("add function");
					// 	$scope.new_employee.company_id = company_id;
					// 	employeesService.addEmployee($scope.new_employee)
					// 		.then(function(data) {
					// 		console.log('new_employee', data);
					// 	});
					// 	$scope.new_employee = {};
					// 	$scope.new_employee.company_id = company_id;
					// 	$window.location.reload();
					// };

				// need to add functionality for deleting the specified
				// employee's conflicts BEFORE deleting the employee
					$scope.delete = function(){
						// delete $scope.employee ???
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
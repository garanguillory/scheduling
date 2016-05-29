
angular
	.module('Scheduling')
	.directive("profile",['profileService', 'authService', function(profileService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			controller: function($scope, $rootScope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;

				// profileService.getEmployee(employee_id)
				// 	.then(function(data){
				// 		$scope.employee = data.data.data[0];
				// 	})
				// 	.catch(function(error){
				// 		console.log("error: ", error);
				// 	});

				// profileService.getConflicts(employee_id)
				// 	.then(function(data){
				// 		$scope.conflicts = data.data.data;
				// 	})
				// 	.catch(function(error){
				// 		console.log("error: ", error);
				// 	});

				profileService.getEmployeeInfo(employee_id)
					.then(function(data){
						$scope.employee = data.data.data;
					})
					.catch(function(error){
						console.log("error: ", error);
					});

				$scope.edit_employee = false;

				// add functionality for edit, delete, and update employee + conflicts
					$scope.edit = function(){
						profileService.editEmployee($scope.employee)
							.then(function(data) {
							console.log('employee edited: ', data);
						});
						profileService.updateConflict(employee_id, $scope.conflicts)
							.then(function(data){
								console.log('conflicts updated: ', data);
							});
						$window.location.reload();
					};

				$scope.remove = function(){
					this.conflict.remove = true;
					console.log(this.conflict);
				};

				$scope.keep = function(){
					this.conflict.remove = false;
					console.log(this.conflict);
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

				
			}
		};
}]);



	// $scope.$watch('scope.$root.datePicked', function() {
	//     $scope.dateChosen = $rootScope.datePicked;
	// });

	// $scope.$watch(function() {
	//   return $rootScope.datePicked;
	// }, function() {
	//   $scope.dateChosen = $rootScope.datePicked;
	// });

	// setInterval(() => {
	// 	console.log('here?', $rootScope.datePicked)
	// }, 1000);

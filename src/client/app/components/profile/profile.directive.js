
angular
	.module('Scheduling')
	.directive("profile",['profileService', 'authService', function(profileService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			require: ['profile'],
			link: function(scope, element, attrs, controllers){
				var months = moment.months();

					// for(var i=0; i<scope.employee.conflicts.length; i++){
					// 	console.log(i);
					// }

				// if(angular.element('td').data('date') == )

				angular.element('tr').on('click', 'td', function(){

					angular.element(this).toggleClass('red');
					console.log('scope.year: ', scope.year);
					
					var date = angular.element(this).data('date');

						if(angular.element(this).hasClass('red')){
							scope.employee.newConflicts.push(date);
						} else {
							scope.employee.newConflicts.splice(scope.employee.newConflicts.indexOf(date),1);
						}
					console.log('scope.employee.newConflicts: ', scope.employee.newConflicts);
					scope.$apply();
				});

			},
			controller: function($scope, $rootScope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;


				profileService.getEmployeeInfo(employee_id)
					.then(function(data){
						$scope.employee = data.data.data;
						$scope.employee.conflictDates = $scope.employee.conflicts.map(function (c) {
							return moment(c.date).format('YYYY-MM-DD');
						});
						$scope.employee.newConflicts = []; 
					})
					.catch(function(error){
						console.log("error: ", error);
					});
				
				
				$scope.moment = moment();
				$scope.year = moment().format('YYYY');
				$scope.current = moment().format('MMMM');
				$scope.counter = 0;
				

				$scope.previousMonth = function(){
					console.log("previous month");
					--$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
					console.log('$scope.year: ', $scope.year);
					// console.log($scope.current +": ",calendar_2016.get($scope.current));
				};

				$scope.nextMonth = function(){
					++$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
					console.log('$scope.year: ', $scope.year);
					// console.log($scope.current +": ",calendar_2016.get($scope.current));
					console.log("$scope.current: ", $scope.current);
				};

				$scope.edit_employee = false;

				// add functionality for edit, delete, and update employee + conflicts
					$scope.edit = function(){
						profileService.editEmployee($scope.employee)
							.then(function(data) {
							console.log('employee edited: ', data);
						});
						// profileService.updateConflict(employee_id, $scope.conflicts)
						// 	.then(function(data){
						// 		console.log('conflicts updated: ', data);
						// 	});
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


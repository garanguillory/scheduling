
angular
	.module('Scheduling')
	.directive("schedule",['scheduleService', 'authService', function(scheduleService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/schedule/schedule.view.html",
			controller: function($scope, $rootScope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;


				scheduleService.getEmployeeInfo(company_id)
						.then(function (data) {
						console.log('employees', data);
						$scope.employees = data.data.data;

						for(var i=0; i<$scope.employees.length; i++){
							$scope.employees[i].conflictDates = $scope.employees[i].conflicts.map(function(c){
								return moment(c.date).format('YYYY-MM-DD');
							});
						}
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
				
			}
		};
}]);


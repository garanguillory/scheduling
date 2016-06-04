
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

						$scope.people = [];

							for(var j=0; j<$scope.employees.length; j++){
								var first_name = $scope.employees[j].first_name;
								var last_name = $scope.employees[j].last_name;
									if($scope.employees[j].admin !== true){
											$scope.people.push({
												id: $scope.employees[j].id,
												name: first_name + " " + last_name,
												conflicts: $scope.employees[j].conflictDates,
												onCall: {
													weekdays: [],
													weekends: [],
													holidays: []
												}
											});
									}
							}
						console.log('$scope.people: ', $scope.people);
					});
				
// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +				
				$scope.makeSchedule = function(){
					console.log('$scope.people: ', $scope.people);
					// exclude admin from rotation
					// $scope.employeeConflicts = {}; // 
					// $scope.employees[i].onCall = [];
					// $scope.employeeConflicts[i] = [];
					// array of weekdays for three months
					var weekdaysJS = ["2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28", "2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31", "2016-09-01", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"]; 
					// need 'on-hold' array
					// need to create separate array of employees 
					// call recursive function to check employee availabilty 
					var sliceWeekdaysJS = weekdaysJS.slice(0);
					var employeesArray = $scope.employees.slice(0);

						// day = sliceweekdaysJS[0];
					var checkAvailability = function(day){

						for(var i=0; i<employeesArray; i++){
							if($scope.employees[i].conflictDates.indexOf(day) === -1){
								$scope.employees[i].onCall.push(day);
								sliceWeekdaysJs.splice(sliceWeekdaysJs.indexOf(day),1);
								employeesArray.splice(employeesArray[i],1);
								checkAvailability(sliceweekdaysJS[0]);
							} else {
								checkAvailability(day+1);
							}
						}
					};

					checkAvailability(sliceweekdaysJS[0]);

					// var weekdays = []; // 53 total days July - September

					// for(var d=0; d<sliceweekdaysJS.length; d++){
					// 	// checkAvailabiltiy function goes here
					// }


				};

// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
				
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


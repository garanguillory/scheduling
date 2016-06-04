
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
						// console.log('employees', data);
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
						// console.log('$scope.people: ', $scope.people);
					});
				
// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +	
				var currentMonth = moment().format("MMMM");
				var currentYear = +moment().format("YYYY");
				var nextYear = +moment().add(1,'year').format('YYYY');

				var getWeekdays = function(currentMonth, year){
					var monthsArray = moment.months();
					var array = [];

					var month = monthsArray.indexOf(currentMonth)+1;
					year = year || moment().year();
					var day = moment().day() + 1;
					
					var lengthOfMonth = moment(month).daysInMonth();

					for(var d=1; d<lengthOfMonth+1; d++){
						var date = moment(year+"-"+month+"-"+d);
							if(date.format("dddd") == "Monday"){
									array.push(date.format("YYYY-MM-DD"));
							}
							if(date.format("dddd") == "Tuesday"){
									array.push(date.format("YYYY-MM-DD"));
							}
							if(date.format("dddd") == "Wednesday"){
									array.push(date.format("YYYY-MM-DD"));
							}
							if(date.format("dddd") == "Thursday"){
									array.push(date.format("YYYY-MM-DD"));
							}
					}

					return array;
				};


				// var currentMonthNumber = +moment().format("M");
				// if($scope.end){
				// 	var endMonthNumber = +moment().month($scope.end).format("M");
				// }

				$scope.makeSchedule = function(){
						console.log("making schedule");

						var weekdays = [];
						var counter = 0;

						while(month != $scope.end){
							var year = moment().month($scope.start).add(counter, 'months').format('YYYY');
							var month = moment().month($scope.start).add(counter, 'months').format('MMMM');

							weekdays.push(getWeekdays(month, year));
							counter++;
						}
						weekdays = weekdays.reduce(function(start, current){
							return start.concat(current);
						})
						console.log("weekdays: ", weekdays);
				};

				// if the start month is less than the current month, then the start month's
				// year is the currentYear + 1
				// Example:
				// 		start-month: August 		end-month: December			current-month: June
				// 		August > June => start-month's year = 2016 (currentYear)
				// 		December > June => end-month's year = 2016 (currentYear)
				// 		start-month: November 		end-month: March			current-month: June
				// 		November > June => start-month's year = 2016 (currentYear)
				// 		March < June => end-month's year = 2017 (currentYear + 1)
				// 		start-month: January 		end-month: April			current-month: June
				// 		January < June => start-month's year = 2017 (currentYear + 1)
				// 		April < June => end-month's year = 2017 (currentYear + 1)
				// if the end month is less than the current month, then the end month's
				// year is the currentYear + 1


// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
				$scope.moment = moment();
				$scope.year = moment().format('YYYY');
				$scope.current = moment().format('MMMM');
				$scope.counter = 0;

				$scope.previousMonth = function(){
					--$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
				};
				$scope.nextMonth = function(){
					++$scope.counter;
					$scope.current = moment().add($scope.counter, 'months').format('MMMM');
					$scope.year = moment().add($scope.counter, 'months').format('YYYY');
				};
				
			}
		};
}]);



angular
	.module('Scheduling')
	.directive("schedule",['scheduleService', 'authService', function(scheduleService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/schedule/schedule.view.html",
			link: function(scope, element, attrs, controller){
				
				scope.$watch('people.completed', function (newValue) {
					var tds = angular.element('.calendar-section td');
					angular.forEach(tds, function (td) {
						var scheduled = angular.element(td).find('.scheduled-employee');
						if ( scheduled.length ) { scheduled.remove(); }
					});

					angular.forEach(tds, function (td) {
						if ( scope.people ) {
							for(var i=0; i<scope.people.length; i++){
								var weekdaysArray = scope.people[i].onCall.weekdays;
								var weekendsArray = scope.people[i].onCall.weekends;
								var holidaysArray = scope.people[i].onCall.holidays;
								// flatten array of onCall days
								var onCalls = weekdaysArray.concat(weekendsArray).concat(holidaysArray);

								onCalls.forEach(function(date){
									if(date == angular.element(td).data("date")){
											angular.element(td).append("<p class='scheduled-employee'>"+scope.people[i].name+"</p>");
									}
								});

							}
						}
					});
				});
			},
			controller: function($scope, $rootScope, $location, $window){

				var company_id = $window.localStorage.company_id;
				var employee_id = $window.localStorage.id;

				var currentMonth = moment().format("MMMM");
				var currentYear = +moment().format("YYYY");
				var nextYear = +moment().add(1,'year').format('YYYY');

				$scope.monthsRemaining = [];
					var number = 0;
					var ending = moment(currentYear + "-12-01", "YYYY-MM-DD").format("MMMM");
					while(months != ending){
						var months = moment().month(currentMonth).add(number, 'months').format('MMMM');
						$scope.monthsRemaining.push(months);
						number++
					}

				$scope.nextMonths = [];
					var final = moment().add(1,'years').subtract(1,'months').format("MMMM");
					var incrementer = 1;
					while(next != final){
						var next = moment().add(incrementer, 'months').format('MMMM');
						$scope.nextMonths.push(next);
						incrementer++
					}

				scheduleService.getEmployeeInfo(company_id)
						.then(function (data) {
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
					}).then(function () {
						scheduleService.getOnCallDates(company_id)
								.then(function(data){
									var onCallDates = data.data.data;
										for(var i=0; i<onCallDates.length; i++){
											for(var j=0; j<$scope.people.length; j++){
												if(onCallDates[i].employee_id == $scope.people[j].id){
													if(onCallDates[i].type == 1){
														$scope.people[j].onCall.weekdays.push(moment(onCallDates[i].date).format("YYYY-MM-DD"));
													}
													if(onCallDates[i].type == 2){
														$scope.people[j].onCall.weekends.push(moment(onCallDates[i].date).format("YYYY-MM-DD"));
													}
													if(onCallDates[i].type == 3){
														$scope.people[j].onCall.holidays.push(moment(onCallDates[i].date).format("YYYY-MM-DD"));
													}
												}
											}
										}
									console.log('$scope.people: ', $scope.people);
									$scope.people.completed = !$scope.people.completed;
								});

					})

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

				// adds Saturday twice && adds Sunday twice
				var getWeekends = function(currentMonth, year){
					var monthsArray = moment.months();
					var array = [];

					var month = monthsArray.indexOf(currentMonth)+1;
					year = year || moment().year();
					var day = moment().day() + 1;

					var lengthOfMonth = moment(month).daysInMonth();

					for(var d=1; d<lengthOfMonth+1; d++){
						var date = moment(year+"-"+month+"-"+d);
							if(date.format("dddd") == "Friday"){
									array.push(date.format("YYYY-MM-DD"));
							}
							if(date.format("dddd") == "Saturday"){
									array.push(date.format("YYYY-MM-DD"));
									array.push(date.format("YYYY-MM-DD"));
							}
							if(date.format("dddd") == "Sunday"){
									array.push(date.format("YYYY-MM-DD"));
									array.push(date.format("YYYY-MM-DD"));
							}
					}

					return array;
				};

				var holidays = [];

				var getHolidays = function(year){

					var newYears = `${year}-01-01`;
						holidays.push(newYears, newYears);
						if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Friday"){
							holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
							holidays.push(`${year}-01-02`, `${year}-01-02`, `${year}-01-03`, `${year}-01-03`);
						} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Saturday"){
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
								holidays.push(`${year}-01-02`, `${year}-01-02`);
						} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Sunday"){
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
						} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Monday"){
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
								holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(3,'days').format("YYYY-MM-DD"));
						} else {
							holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
						}

					// Easter
						holidays.push('2017-04-16', '2017-04-16', '2017-04-15', '2017-04-15', '2017-04-14');
						holidays.push('2018-04-01', '2018-04-01', '2018-03-31', '2018-03-31', '2018-03-30');
						holidays.push('2018-04-21', '2018-04-21', '2018-04-20', '2018-04-20', '2018-04-19');
						holidays.push('2018-04-12', '2018-04-12', '2018-04-11', '2018-04-11', '2018-04-10');
						holidays.push('2017-04-04', '2017-04-04', '2017-04-03', '2017-04-03', '2017-04-02');

					var memorialDay = moment(`${year}-05-01`, "YYYY-MM-DD").endOf('month').day("Monday").format("YYYY-MM-DD");
						holidays.push(moment(memorialDay,"YYYY-MM-DD").format("YYYY-MM-DD"), moment(memorialDay,"YYYY-MM-DD").format("YYYY-MM-DD"));
						holidays.push(moment(memorialDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"),moment(memorialDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
						holidays.push(moment(memorialDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"),moment(memorialDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
					
					var fourthOfJuly = `${year}-07-04`;
						holidays.push(fourthOfJuly, fourthOfJuly);
						if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Friday"){
							holidays.push(`${year}-07-03`, `${year}-07-05`, `${year}-07-05`, `${year}-07-06`, `${year}-07-06`);
						} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Saturday"){
							holidays.push(`${year}-07-03`, `${year}-07-03`, `${year}-07-05`, `${year}-07-05`);
						} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Sunday"){
							holidays.push(`${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
						} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Monday"){
							holidays.push(`${year}-07-01`, `${year}-07-02`, `${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
						} else {
							holidays.push(`${year}-07-03`);
						}

					// Labor Day
					var start = moment(`${year}-09`).startOf('month');
					var counter = 1;
						if(start != "Monday"){
							while(day != "Monday"){
								var day = moment(`${year}-09`).startOf('month').add(counter,'days').format('dddd');
								if(day == "Monday"){
									var laborDay = moment(`${year}-09`).startOf('month').add(counter,'days').format('YYYY-MM-DD');
									holidays.push(moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"), moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"));
									holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
									holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
								}
								counter++
							}
						}

					var Thanksgiving = moment(`${year}-11-01`,"YYYY-MM-DD").startOf('month').day("Thursday").add(3,'weeks').format("YYYY-MM-DD");
						holidays.push(moment(Thanksgiving,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
						holidays.push(Thanksgiving, Thanksgiving);
						holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(1,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(1,'days').format("YYYY-MM-DD"));
						holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(2,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(2,'days').format("YYYY-MM-DD"));
						holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(3,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(3,'days').format("YYYY-MM-DD"));

					// Christmas
					var christmas = `${year}-12-25`;
						holidays.push(christmas, christmas);
						if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Friday"){
							holidays.push(`${year}-12-24`, `${year}-12-26`, `${year}-12-26`, `${year}-12-27`, `${year}-12-27`);
						} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Saturday"){
							holidays.push(`${year}-12-24`, `${year}-12-26`, `${year}-12-26`);
						} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Sunday"){
							holidays.push(`${year}-12-23`,`${year}-12-24`, `${year}-12-24`, `${year}-12-26`, `${year}-12-26`);
						} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Monday"){
							holidays.push(`${year}-12-22`,`${year}-12-23`, `${year}-12-23`, `${year}-12-24`, `${year}-12-24`);
						} else {
							holidays.push(`${year}-12-24`);
						}

					// console.log(holidays);
				};

				getHolidays(currentYear);
				getHolidays(currentYear+1);

				// check to see if holiday falls on a weekend
				// holiday shifts are split into AM and PM

				$scope.makeSchedule = function(){
						console.log("making schedule");

						var weekdays = [];
						var weekends = [];
						var counter = 0;

						while(month != $scope.end){
							var year = moment().month($scope.start).add(counter, 'months').format('YYYY');
							var month = moment().month($scope.start).add(counter, 'months').format('MMMM');

							weekdays.push(getWeekdays(month, year));
							weekends.push(getWeekends(month, year));
							counter++;
						}

						weekdays = weekdays.reduce(function(start, current){
							return start.concat(current);
						});

							for(var i=0; i<weekdays.length; i++){
								holidays.map(function(date){
									if(weekdays[i] == date){
										return weekdays.splice(weekdays.indexOf(weekdays[i]), 1);
									}
								});
							}

						weekends = weekends.reduce(function(start, current){
							return start.concat(current);
						});

							for(var i=0; i<weekends.length; i++){
								holidays.map(function(date){
									if(weekends[i] == date){
										return weekends.splice(weekends.indexOf(weekends[i]), 1);
									}
								});
							}

						var findEligible = function(date) {
												return function(person) {
																		return person.conflicts.indexOf(date) < 0;
												};
						};

						var findShortestOnCallList = function(type) {
												return function(prev, curr) {
																		return prev.onCall[type].length <= curr.onCall[type].length ? prev : curr;
												};
						};

						weekdays.reduce(function(acc, date) {
						  var type = 'weekdays';
						  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

						  if(selected.onCall[type].indexOf(date) == -1){
						  	selected.onCall[type].push(date);
						  }

						  return acc;
						}, $scope.people);

						weekends.reduce(function(acc, date) {
						  var type = 'weekends';
						  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

						  if(selected.onCall[type].indexOf(date) == -1){
						  	selected.onCall[type].push(date);
						  }

						  return acc;
						}, $scope.people);

						holidays.reduce(function (acc, date) {
						  var type = 'holidays';
						  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

						  if(selected.onCall[type].indexOf(date) == -1){
						  	selected.onCall[type].push(date);
						  }

						  return acc;
						}, $scope.people);


						$scope.people.completed = !$scope.people.completed;

						scheduleService.onCallSchedule(company_id, $scope.people)
													 .then(function(data) {
															console.log('current schedule: ', data);
													 });

				};

				$scope.resetSchedule = function(){
					scheduleService.deleteSchedule(company_id)
								 .then(function(data) {
									 	console.log('current schedule: ', data);
									 	$window.location.reload();
								  });

				};

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

